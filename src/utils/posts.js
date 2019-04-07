import get from 'lodash/get'

/**
 * Node selectors / utils
 */
export function getSnippetPropsFromNode(node) {
  const url = get(node, 'fields.slug')
  const frontmatter = get(node, 'frontmatter', {})
  const title = get(node, 'frontmatter.title') || url
  const timeToRead = get(node, 'timeToRead')
  const html = get(node, 'html')
  const id = get(node, 'id')

  return {
    ...frontmatter,
    key: url,
    title,
    id,
    html,
    url,
    timeToRead,
    excerpt: getExcerptFromNode(node),
  }
}

export function getExcerptFromNode(node) {
  return get(node, 'frontmatter.excerpt') || node.excerpt
}

/**
 * Prop selectors / utils
 */
export function getPostNodesFromProps(props) {
  const posts = get(props, 'data.allMarkdownRemark.edges', [])
  return filterPublishedPosts(posts)
}

export function getSnippetPostsFromProps(props) {
  return getPostNodesFromProps(props).map(({ node }) =>
    getSnippetPropsFromNode(node)
  )
}

export function getPostDataFromProps(props) {
  return get(props, 'data.markdownRemark')
}

export function isPageType(props) {
  const post = getPostDataFromProps(props)
  return post.fields.type === 'page'
}

export function getPostIntroProps(props) {
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

/**
 * Post selectors / utils
 */
export function pageTypeCheck(post) {
  if (get(post, 'fields.slug', '').indexOf('posts/') < 0) return null
  return post
}

export function getDropcapFromPost(post) {
  return get(post, 'frontmatter.dropCap') === false ? false : true
}

export function filterPublishedPost(post) {
  return (
    process.env.NODE_ENV === 'development' ||
    !get(post, 'node.frontmatter.draft')
  )
}

export function filterPublishedPosts(posts) {
  return posts.filter(filterPublishedPost)
}

export function getDescriptionFromPost(post) {
  return get(post, 'frontmatter.description') || post.excerpt
}

export function getFeaturedImageFromPost(post) {
  return get(post, 'frontmatter.featuredImage.childImageSharp.fluid')
}

export function getFeaturedImageFromPostLoose(post) {
  return (
    get(post, 'frontmatter.featuredImage.childImageSharp.fluid') ||
    get(post, 'frontmatter.image.publicURL')
  )
}
