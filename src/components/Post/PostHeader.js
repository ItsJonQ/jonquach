import React from 'react'
import styled from '@emotion/styled'

export class PostHeader extends React.PureComponent {
  static defaultProps = {
    size: 'default',
  }

  render() {
    return (
      <header>
        <TitleUI {...this.props} />
      </header>
    )
  }
}

const TitleUI = styled('h1')`
  font-family: var(--fontFamilySans);
  font-size: 2.75rem;
  font-weight: var(--fontWeightTitle);
  line-height: 1.1;
  margin: 20px auto;

  @media (min-width: 768px) {
    font-size: 3.5rem;
    line-height: 1.1;
    letter-spacing: -2px;
  }

  ${({ size }) =>
    size === 'sm' &&
    `
    font-size: 1.8rem;

    @media (min-width: 768px) {
      font-size: 2.4rem;
      letter-spacing: 0px;
    }
  `}
`

export default PostHeader
