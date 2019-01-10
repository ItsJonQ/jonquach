const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { get } = _

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/Post.js')

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    draft
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        let posts = result.data.allMarkdownRemark.edges
        posts = filterPublishedPosts(posts)

        _.each(posts, (post, index) => {
          const previous =
            index === posts.length - 1 ? null : posts[index + 1].node
          const next = index === 0 ? null : posts[index - 1].node

          createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const defaultSlug = createFilePath({ node, getNode })
    const type = getContentTypeFromNode(node)
    let slug = removeDateFromSlug(defaultSlug)
    let image = get(node, 'frontmatter.image', '')
    const draft = get(node, 'frontmatter.draft', false)

    if (image) {
      image = path.relative(
        path.dirname(node.fileAbsolutePath),
        path.join(__dirname, '/static/', image)
      )
    }

    if (type === 'post') {
      slug = `/posts${slug}`
    }

    createNodeField({
      name: `slug`,
      node,
      value: slug,
    })

    createNodeField({
      name: `type`,
      node,
      value: type,
    })
  }
}

function removeDateFromSlug(slug) {
  return slug.replace(/\d{4}-\d{1,2}-\d{1,2}\-/g, '')
}

function getContentTypeFromNode(node) {
  const srcPath = path.resolve(__dirname, 'src')
  const filePath = node.fileAbsolutePath.replace(srcPath, '')
  let fileType = path.dirname(filePath).split('/')[1]

  // Remove pluralization
  if (fileType[fileType.length - 1] === 's') {
    fileType = fileType.slice(0, -1)
  }

  return fileType
}

function filterPublishedPost(post) {
  return (
    process.env.NODE_ENV === 'development' ||
    !get(post, 'node.frontmatter.draft')
  )
}

function filterPublishedPosts(posts) {
  return posts.filter(filterPublishedPost)
}
