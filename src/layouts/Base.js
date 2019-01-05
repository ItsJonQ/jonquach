import React from 'react'
import { css, Global } from '@emotion/core'
import SiteContainer from '../components/SiteContainer'
import TopNav from '../components/TopNav'
import Footer from '../components/Footer'

class Layout extends React.PureComponent {
  render() {
    const { children } = this.props
    return (
      <React.Fragment>
        <Global styles={globalStyles} />
        <TopNav />
        <SiteContainer>
          {children}
          <Footer />
        </SiteContainer>
      </React.Fragment>
    )
  }
}

const globalStyles = css`
  :root {
    --fontFamilySans: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Roboto Light', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    --fontFamilySerif: 'Merriweather', 'Georgia', serif;
    --fontFamilyMono: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier,
      monospace;
    --brandColor: #05f;
    --brandColorRGB: 0, 85, 255;
    --fontColor: #111;
    --fontSize: 18px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    font-family: var(--fontFamilySans);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--fontColor);
    font-size: var(--fontSize);
  }

  a {
    color: var(--brandColor);
    text-decoration: none;

    &:hover {
      background: rgba(var(--brandColorRGB), 0.1);
    }
  }
`

export default Layout
