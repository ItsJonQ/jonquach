import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts'
import BreakoutContainer from '../components/Layout/BreakoutContainer'
import Col from '../components/Layout/Col'
import Row from '../components/Layout/Row'
import Section from '../components/Layout/Section'
import PostProject from '../components/Post/PostProject'
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
          title="Projects"
          slug="/projects"
          description="A collection of projects."
        />
        <Section>
          <PostIntro topCaption="Making things 🛠" title="Projects" />
        </Section>
        <BreakoutContainer>
          <Row>
            {posts.map(post => {
              return (
                <Col key={post.id}>
                  <PostProject {...post} />
                </Col>
              )
            })}
          </Row>
        </BreakoutContainer>
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
      filter: { fields: { type: { in: ["project"] } } }
    ) {
      edges {
        node {
          html
          id
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            description
            draft
            icon
            title
            category
          }
        }
      }
    }
  }
`
