import React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import Layout from '../layouts'
import PostIntro from '../components/Post/PostIntro'
import PostLead from '../components/Post/PostLead'
import PostSnippet from '../components/Post/PostSnippet'
import Section from '../components/Layout/Section'
import SectionMetaTitle from '../components/Meta/SectionMetaTitle'
import Link from '../components/Base/Link'
import Hr from '../components/Base/Hr'
import Showcase from '../components/Sections/Showcase'
import SEO from '../components/Base/SEO'
import { getSnippetPostsFromProps } from '../utils/posts'

export class BlogIndex extends React.PureComponent {
  render() {
    const posts = getSnippetPostsFromProps(this.props)

    return (
      <Layout>
        <SEO
          title="Hello"
          description="I'm Q. A designer / developer. I specialize in Design Systems, Interaction, and UI."
          slug="/"
        />
        <Section>
          <PostIntro
            topCaption="Hello 👋"
            title={
              <SecondaryTextUI>
                I'm Q.
                <br />A <span>designer</span> <SlashUI>/</SlashUI>{' '}
                <span>developer</span>.
              </SecondaryTextUI>
            }
          />
        </Section>
        <LeadUI>
          I specialize in <em>Design Systems</em>, <em>Interaction</em>, and{' '}
          <em>UI</em>.<br />
          I'm a Principal Designer at{' '}
          <Link to="https://www.automattic.com/">Automattic</Link>.
        </LeadUI>
        <Showcase />
        <Hr />
        {posts.length && (
          <>
            <SectionMetaTitle>Writing</SectionMetaTitle>
            {posts.map(post => (
              <PostSnippet {...post} />
            ))}
            <SeeMoreUI>
              <Link to="/posts">See More</Link>
            </SeeMoreUI>
          </>
        )}
      </Layout>
    )
  }
}

const SecondaryTextUI = styled('div')`
  font-size: 90%;
`

const LeadUI = styled(PostLead)`
  font-family: var(--fontFamilySans);
  font-weight: 400;
  margin-bottom: 20px;
  margin-top: -20px;

  a {
    color: inherit;
  }
`

const SlashUI = styled('span')`
  font-weight: 200;
  opacity: 0.5;
`

const SeeMoreUI = styled('p')`
  margin: 1em 0;
`

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
      filter: { fields: { type: { in: ["post"] } } }
      limit: 3
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

export default BlogIndex
