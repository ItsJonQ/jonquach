import React from 'react'
import styled from '@emotion/styled'

export class BreakoutContainer extends React.PureComponent {
  render() {
    const { children, ...rest } = this.props

    return (
      <BreakoutContainerUI {...rest}>
        <InnerContainerUI>{children}</InnerContainerUI>
      </BreakoutContainerUI>
    )
  }
}

const BreakoutContainerUI = styled('div')`
  margin: 0 -15px;

  @media (min-width: 710px) {
    margin: 0 calc((100vw - 680px) / 2 * -1 + 20px);
  }
`

const InnerContainerUI = styled('div')`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 15px;
`

export default BreakoutContainer
