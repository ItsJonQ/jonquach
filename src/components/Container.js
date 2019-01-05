import React from 'react'
import styled from '@emotion/styled'

export class Container extends React.PureComponent {
  static defaultProps = {
    align: 'middle',
  }

  render() {
    return <ContainerUI {...this.props} />
  }
}

const ContainerUI = styled('div')`
  max-width: 680px;

  ${({ align }) => {
    if (align === 'left') {
      return `
        margin-right: auto;
      `
    }
    if (align === 'middle') {
      return `
        margin: auto;
      `
    }
    if (align === 'right') {
      return `
        margin-left: auto;
      `
    }
  }}
`

export default Container
