import React from 'react'
import styled from '@emotion/styled'
import BreakoutContainer from '../Layout/BreakoutContainer'
import Row from '../Layout/Row'
import Col from '../Layout/Col'
import PostProject from '../Post/PostProject'

export const ProjectSection = props => {
  const { title, posts } = props

  return (
    <SectionUI>
      <TitleUI>{title}</TitleUI>
      <BreakoutContainer>
        <Row>
          {posts.map(post => (
            <Col key={post.id}>
              <PostProject {...post} />
            </Col>
          ))}
        </Row>
      </BreakoutContainer>
    </SectionUI>
  )
}

const SectionUI = styled('section')`
  margin: 0 0 3em;
`

const TitleUI = styled('h2')`
  font-weight: 700;
  font-size: 1.2rem;
  opacity: 0.4;
  margin: 0 0 1em;
`

export default ProjectSection
