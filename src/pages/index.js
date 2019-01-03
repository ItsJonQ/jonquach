import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../layouts'

class BlogIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Link to="/posts">Posts</Link>
      </Layout>
    )
  }
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            excerpt
          }
        }
      }
    }
  }
`
