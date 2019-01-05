import React from 'react'
import BaseLayout from '../../layouts'
import Container from './Container'

class Layout extends React.PureComponent {
  render() {
    const { children } = this.props

    return (
      <BaseLayout>
        <Container>{children}</Container>
      </BaseLayout>
    )
  }
}

export default Layout
