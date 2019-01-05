import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import SEO from '../components/Base/SEO'
import PostIntro from '../components/Post/PostIntro'
import PostFadeTop from '../components/Post/PostFadeTop'
import PostPreviousNext from '../components/Post/PostPreviousNext'
import BaseLayout from '../layouts'
import Container from '../components/Layout/Container'
import Section from '../components/Layout/Section'
import PostTypography from '../components/Post/PostTypography'
import {
  getPostDataFromProps,
  isPageType,
  pageTypeCheck,
  getPostIntroProps,
  getDropcapFromPost,
} from '../utils/posts'

class PostTemplate extends React.Component {
  renderPreviousNext() {
    const { previous, next } = this.props.pageContext
    const isPage = isPageType(this.props)

    if (isPage) return null

    return (
      <PostPreviousNext
        previous={pageTypeCheck(previous)}
        next={pageTypeCheck(next)}
      />
    )
  }

  render() {
    const post = getPostDataFromProps(this.props)
    console.log(post)

    return (
      <BaseLayout>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.excerpt}
          slug={post.fields.slug}
        />

        <article>
          <Container>
            <PostFadeTop />
            <Section>
              <PostIntro {...getPostIntroProps(this.props)} />
            </Section>
            <PostContentUI>
              <PostTypography
                dangerouslySetInnerHTML={{ __html: post.html }}
                withDropCap={getDropcapFromPost(post)}
              />
            </PostContentUI>
            {this.renderPreviousNext()}
          </Container>
        </article>
      </BaseLayout>
    )
  }
}

const PostContentUI = styled('div')`
  margin: 40px auto;
`

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        category
        topCaption
        dropCap
      }
      fields {
        slug
        type
      }
    }
  }
`

export default PostTemplate
