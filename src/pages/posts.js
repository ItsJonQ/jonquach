import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts'
import Container from '../components/Layout/Container'
import Section from '../components/Layout/Section'
import PostSnippet from '../components/Post/PostSnippet'
import PostFeatured from '../components/Post/PostFeatured'
import TopCaption from '../components/Meta/TopCaption'
import SEO from '../components/Base/SEO'
import { getPostNodesFromProps, getSnippetPropsFromNode } from '../utils/posts'
import { getSiteTitleFromProps } from '../utils/helpers'

export class PostIndex extends React.Component {
  getPosts() {
    const posts = getPostNodesFromProps(this.props)
    const [featuredPosts, ...rest] = posts

    return rest.map(({ node }) => getSnippetPropsFromNode(node))
  }

  getFeaturedPost() {
    const posts = getPostNodesFromProps(this.props)
    const [featuredPost, ...rest] = posts

    return featuredPost && getSnippetPropsFromNode(featuredPost.node)
  }

  render() {
    const featuredPost = this.getFeaturedPost()
    const posts = this.getPosts()

    return (
      <Layout>
        <SEO title="Writing" slug="/posts" />
        <Section>
          <TopCaption>
            Scribbles...{' '}
            <span aria-label="Writing emoji" role="img">
              ✍️
            </span>
          </TopCaption>
          {featuredPost && <PostFeatured {...featuredPost} />}
        </Section>
        <Container>
          {posts.map(post => {
            return <PostSnippet {...post} />
          })}
        </Container>
      </Layout>
    )
  }
}

export default PostIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { type: { in: ["post"] } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            category
          }
        }
      }
    }
  }
`
