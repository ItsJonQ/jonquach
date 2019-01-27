import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts'
import Container from '../components/Layout/Container'
import Section from '../components/Layout/Section'
import PostSnippet from '../components/Post/PostSnippet'
import PostIntro from '../components/Post/PostIntro'
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
          title="Xperiments"
          slug="/x"
          description="A collection of experiments."
        />
        <Section>
          <PostIntro
            topCaption="What happens if I do this... 💥"
            title="Xperiments"
          />
        </Section>
        <Container>
          {posts.map(post => {
            return <PostSnippet {...post} />
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
      filter: { fields: { type: { in: ["x"] } } }
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
