import React from 'react'
import { css, Global } from '@emotion/core'
import SiteContainer from '../components/SiteContainer'
import TopNav from '../components/TopNav'

class Layout extends React.PureComponent {
  render() {
    const { children } = this.props
    return (
      <React.Fragment>
        <Global styles={globalStyles} />
        <TopNav />
        <SiteContainer>{children}</SiteContainer>
      </React.Fragment>
    )
  }
}

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Roboto Light', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #111;
    font-size: 18px;
  }

  a {
    color: #05f;
    text-decoration: none;

    &:hover {
      background: rgba(0, 85, 255, 0.1);
    }
  }
`

export default Layout
