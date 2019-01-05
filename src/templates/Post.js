import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import SEO from '../components/Base/SEO'
import PostIntro from '../components/Post/PostIntro'
import PostFadeTop from '../components/Post/PostFadeTop'
import PostPreviousNext from '../components/Post/PostPreviousNext'
import BaseLayout from '../layouts'
import Container from '../components/Layout/Container'
import PostTypography from '../components/Post/PostTypography'

class PostTemplate extends React.Component {
  renderPreviousNext() {
    const { previous, next } = this.props.pageContext
    const isPage = isPageType(this.props)

    if (isPage) return null

    return <PostPreviousNext previous={previous} next={next} />
  }

  render() {
    const post = getPostDataFromProps(this.props)

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
            <PostIntro {...getPostIntroProps(this.props)} />
            <PostContentUI>
              <PostTypography
                dangerouslySetInnerHTML={{ __html: post.html }}
                className="has-dropCap"
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

function getPostDataFromProps(props) {
  return props.data.markdownRemark
}

function isPageType(props) {
  const post = getPostDataFromProps(props)
  return post.fields.type === 'page'
}

function getPostIntroProps(props) {
  const post = getPostDataFromProps(props)
  const isPage = isPageType(props)

  const { topCaption, category, title, date, timeToRead } = post.frontmatter

  return {
    topCaption,
    category,
    title,
    date,
    timeToRead: !isPage && timeToRead,
  }
}

export default PostTemplate

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
      }
      fields {
        slug
        type
      }
    }
  }
`
