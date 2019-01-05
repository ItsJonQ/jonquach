import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../layouts'
import Container from '../components/Container'
import PostIntro from '../components/PostIntro'
import PostSnippet from '../components/PostSnippet'
import { formatReadingTime } from '../utils/helpers'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <PostIntro title="Writing" topCaption="Scribbles... ✍️" />
        <Container>
          {posts.map(({ node }) => {
            return <PostSnippet {...getSnippetPropsFromNode(node)} />
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

export default BlogIndex

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
