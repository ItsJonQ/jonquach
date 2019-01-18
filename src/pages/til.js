import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts'
import Container from '../components/Layout/Container'
import Section from '../components/Layout/Section'
import PostSnippet from '../components/Post/PostSnippet'
import PostFeatured from '../components/Post/PostFeatured'
import PostIntro from '../components/Post/PostIntro'
import TopCaption from '../components/Meta/TopCaption'
import SEO from '../components/Base/SEO'
import { getPostNodesFromProps, getSnippetPropsFromNode } from '../utils/posts'

export class PostIndex extends React.Component {
  getPosts() {
    const posts = getPostNodesFromProps(this.props)

    return posts.map(({ node }) => getSnippetPropsFromNode(node))
  }

  render() {
    const posts = this.getPosts()

    return (
      <Layout>
        <SEO
          title="Today I Learned"
          slug="/til"
          description="A collection of daily learnings."
        />
        <Section>
          <PostIntro topCaption="Daily Learnings 🤓" title="Today I Learned" />
        </Section>
        <Container>
          {posts.map(post => {
            return (
              <PostSnippet
                {...post}
                excerpt={`<strong>TIL</strong> ${post.excerpt}`}
              />
            )
          })}
        </Container>
      </Layout>
    )
  }
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
      filter: { fields: { type: { in: ["til"] } } }
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
            draft
            title
            category
          }
        }
      }
    }
  }
`
