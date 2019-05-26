// Use commonJS module format as this may be consumed by NodeJS script
const postQuery = require('../queries/postQuery')

const getEdges = ({
  data: {
    allMarkdownRemark: {
      edges
    }
  }
}) => edges

const parsePost = post => {
  const {
    node: {
      frontmatter: {
        slug,
        title,
      },
      html,
    }
  } = post

  return {
    html,
    slug,
    title,
  }
}

const fetchAllPosts = graphql => graphql(postQuery)
  .then(
    results => getEdges(results).map(parsePost)
  )

module.exports = {
  getEdges,
  fetchAllPosts
}
