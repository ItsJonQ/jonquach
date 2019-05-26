// Use commonJS module format as this may be consumed by NodeJS script
const gql = require('../util/gql')

module.exports = gql`
  query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: {
          glob: "**/posts/*.md"
        } 
      },
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
          }
          html
        }
      }
    }
  }
`
