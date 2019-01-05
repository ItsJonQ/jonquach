import React from 'react'
import styled from '@emotion/styled'
import Layout from '../layouts'
import PostIntro from '../components/PostIntro'
import Link from '../components/Link'

class BlogIndex extends React.Component {
  render() {
    return (
      <Layout>
        <PostIntro
          topCaption="Hello 👋"
          title={
            <SecondaryTextUI>
              I'm Q.
              <br />A <DesignerUI>
                designer
              </DesignerUI> <SlashUI>/</SlashUI>{' '}
              <DeveloperUI>developer</DeveloperUI>.
            </SecondaryTextUI>
          }
        />
        <LeadUI>I specialize in Design Systems, Interaction, and UI.</LeadUI>
        <AboutUI>
          I'm a <strong>Design Engineer</strong> at{' '}
          <Link to="https://www.helpscout.com/">Help Scout</Link>, where I
          create frameworks, tools, and 🎉 delight 🎉.
        </AboutUI>
      </Layout>
    )
  }
}

const SecondaryTextUI = styled('div')`
  font-size: 90%;
`

const LeadUI = styled('p')`
  font-size: 1.6rem;
  margin-bottom: 20px;
  margin-top: -20px;
`

const AboutUI = styled('p')`
  font-size: 1.2rem;
`

const DesignerUI = styled('span')``

const DeveloperUI = styled('span')`
  font-family: var(--fontFamilyMono);
  letter-spacing: -4px;
`

const SlashUI = styled('span')`
  font-weight: 200;
  opacity: 0.5;
`

export default BlogIndex
