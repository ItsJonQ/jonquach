import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from '@emotion/styled'
import SEO from '../components/SEO'
import PostIntro from '../components/PostIntro'
import BaseLayout from '../layouts'
import Container from '../components/Container'
import Typography from '../components/Typography'

class PostTemplate extends React.Component {
  renderPreviousNext() {
    const { previous, next } = this.props.pageContext
    const isPage = isPageType(this.props)

    if (isPage) return null

    return <PreviousNext previous={previous} next={next} />
  }

  render() {
    const post = getPostDataFromProps(this.props)

    return (
      <BaseLayout>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.excerpt}
          slug={post.fields.slug}
        />

        <article>
          <Container>
            <FadeTopUI />
            <PostIntro {...getPostIntroProps(this.props)} />
            <PostContentUI>
              <Typography
                dangerouslySetInnerHTML={{ __html: post.html }}
                className="has-dropCap"
              />
            </PostContentUI>
            {this.renderPreviousNext()}
          </Container>
        </article>
      </BaseLayout>
    )
  }
}

class PreviousNext extends React.PureComponent {
  render() {
    const { previous, next } = this.props

    return (
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
  margin-bottom: -10vh;
`

function getPostDataFromProps(props) {
  return props.data.markdownRemark
}

function isPageType(props) {
  const post = getPostDataFromProps(props)
  return post.fields.type === 'page'
}

function getPostIntroProps(props) {
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

export default PostTemplate

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
        category
        topCaption
      }
      fields {
        slug
        type
      }
    }
  }
`
