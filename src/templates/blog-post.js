import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import SEO from '../components/SEO'
import Layout from '../components/Layout'
import { formatReadingTime } from '../utils/helpers'

const GITHUB_USERNAME = 'itsjonq'
const GITHUB_REPO_NAME = 'jonquach'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next, slug } = this.props.pageContext
    console.log(this.props)
    const editUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/master/src/pages/${slug.replace(
      /\//g,
      ''
    )}.md`
    const discussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(
      `https://jonquach.com${slug}`
    )}`
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.excerpt}
          slug={post.fields.slug}
        />
        <h1>{post.frontmatter.title}</h1>
        <p>
          {post.frontmatter.date}
          {` • ${formatReadingTime(post.timeToRead)}`}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <h3 style={{}}>
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: '#ffa7c4',
            }}
            to={'/'}
          >
            Q
          </Link>
        </h3>
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

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
        excerpt
      }
      fields {
        slug
      }
    }
  }
`
