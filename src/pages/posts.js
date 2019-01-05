import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../layouts'
import Container from '../components/Layout/Container'
import Section from '../components/Layout/Section'
import PostSnippet from '../components/Post/PostSnippet'
import PostFeatured from '../components/Post/PostFeatured'
import TopCaption from '../components/Meta/TopCaption'

export class PostIndex extends React.Component {
  getPosts() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const [featuredPosts, ...rest] = posts

    return rest.map(({ node }) => getSnippetPropsFromNode(node))
  }

  getFeaturedPost() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const [featuredPost, ...rest] = posts

    return featuredPost && getSnippetPropsFromNode(featuredPost.node)
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    const featuredPost = this.getFeaturedPost()
    const posts = this.getPosts()

    return (
      <Layout location={this.props.location} title={siteTitle}>
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

function getSnippetPropsFromNode(node) {
  const title = get(node, 'frontmatter.title') || node.fields.slug
  const url = node.fields.slug

  return {
    key: url,
    title,
    url,
    date: node.frontmatter.date,
    timeToRead: node.timeToRead,
    excerpt: getExcerptFromNode(node),
    category: node.frontmatter.category,
  }
}

function getExcerptFromNode(node) {
  return node.frontmatter.excerpt || node.excerpt
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
