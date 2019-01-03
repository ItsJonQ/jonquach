import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import styled from '@emotion/styled'
import SEO from '../components/SEO'
import PostHeader from '../components/PostHeader'
import PostMeta from '../components/PostMeta'
import Section from '../components/Section'
import Layout from '../components/Layout'
import Typography from '../components/Typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.excerpt}
          slug={post.fields.slug}
        />

        <FadeTopUI />
        <Section>
          <PostHeader>{post.frontmatter.title}</PostHeader>
          <PostMeta date={post.frontmatter.date} timeToRead={post.timeToRead} />
        </Section>

        <PostContentUI>
          <Typography
            dangerouslySetInnerHTML={{ __html: post.html }}
            className="has-dropCap"
          />
        </PostContentUI>

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

const PostContentUI = styled('div')`
  margin: 40px auto;
`

const FadeTopUI = styled('div')`
  height: 10vh;
  position: sticky;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  pointer-events: none;
  background: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  margin-bottom: -5vh;
`

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
