import React from 'react'
import styled from '@emotion/styled'

export class SectionMetaTitle extends React.PureComponent {
  render() {
    return (
      <SectionMetaTitleUI {...this.props}>
        <TitleUI>{this.props.children}</TitleUI>
      </SectionMetaTitleUI>
    )
  }
}

const SectionMetaTitleUI = styled('div')`
  margin-top: 10px;
  margin-bottom: 10px;
`

const TitleUI = styled('span')`
  border: 1px solid rgba(var(--brandColorRGB), 0.2);
  color: var(--brandColor);
  font-size: 0.6rem;
  font-weight: var(--fontWeightTitle);
  letter-spacing: 1px;
  line-height: 1;
  padding: 1px 3px;
  text-transform: uppercase;
`

export default SectionMetaTitle
