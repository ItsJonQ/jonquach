import React from 'react'
import styled from '@emotion/styled'

export class PostHeader extends React.PureComponent {
  render() {
    return (
      <header>
        <TitleUI {...this.props} />
      </header>
    )
  }
}

const TitleUI = styled('h1')`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 2.75rem;
  font-weight: 900;
  line-height: 1.1;
  margin: 20px auto;

  @media (min-width: 768px) {
    font-size: 3.5rem;
    line-height: 1.1;
    letter-spacing: -2px;
  }
`

export default PostHeader
