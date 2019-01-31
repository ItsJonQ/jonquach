import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import SEO from '../components/Base/SEO'
import PostIntro from '../components/Post/PostIntro'
import PostFadeTop from '../components/Post/PostFadeTop'
import PostFeaturedImage from '../components/Post/PostFeaturedImage'
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
  getFeaturedImageFromPost,
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

  renderFeaturedImage() {
    const post = getPostDataFromProps(this.props)
    const featuredImage = getFeaturedImageFromPost(post)

    if (!featuredImage) return

    return <PostFeaturedImage src={featuredImage} />
  }

  render() {
    const post = getPostDataFromProps(this.props)

    return (
      <BaseLayout>
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
          slug={post.fields.slug}
          image={post.frontmatter.image}
        />

        <article>
          <Container>
            <PostFadeTop />
            <Section>
              <PostIntro {...getPostIntroProps(this.props)} />
            </Section>
            <PostContentUI>
              {this.renderFeaturedImage()}
              <PostTypography
                dangerouslySetInnerHTML={{ __html: post.html }}
                withDropCap={getDropcapFromPost(post)}
              />
            </PostContentUI>
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
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        category
        topCaption
        dropCap
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        image {
          publicURL
        }
      }
      fields {
        slug
        type
      }
    }
  }
`

export default PostTemplate
