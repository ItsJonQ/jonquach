import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts'
import Section from '../components/Layout/Section'
import PostIntro from '../components/Post/PostIntro'
import ProjectSection from '../components/Sections/ProjectSection'
import SEO from '../components/Base/SEO'
import { getPostNodesFromProps, getSnippetPropsFromNode } from '../utils/posts'

export class PostIndex extends React.Component {
  getPosts() {
    const posts = getPostNodesFromProps(this.props)

    return posts.map(({ node }) => getSnippetPropsFromNode(node))
  }

  render() {
    const posts = this.getPosts()
    const groupedPosts = sortProjects(posts)

    return (
      <Layout>
        <SEO
          title="Projects"
          slug="/projects"
          description="A collection of projects."
        />
        <Section>
          <PostIntro topCaption="Stuff I've made 🛠" title="Projects" />
        </Section>
        {groupedPosts.map(group => (
          <ProjectSection {...group} key={group.title} />
        ))}
      </Layout>
    )
  }
}

export const sortAlphabetically = key => (a, b) => {
  let nameA = a[key].toLowerCase(),
    nameB = b[key].toLowerCase()
  if (nameA < nameB) return -1
  if (nameA > nameB) return 1
  return 0
}

export const sortProjects = projects => {
  const groupedProjects = projects.reduce((collection, project) => {
    const { type } = project
    if (!collection[type]) {
      collection[type] = [project]
    } else {
      collection[type] = [...collection[type], project]
    }

    return collection
  }, {})

  return Object.keys(groupedProjects)
    .reduce((projects, title) => {
      const posts = groupedProjects[title]
        .sort(sortAlphabetically('title'))
        .sort((a, b) => b.order - a.order)
      return [
        ...projects,
        {
          title,
          posts,
        },
      ]
    }, [])
    .sort(sortAlphabetically('title'))
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
            github
            icon
            category
            order
            status
            title
            type
          }
        }
      }
    }
  }
`
