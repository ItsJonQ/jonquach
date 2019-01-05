import React from 'react'
import { css, Global } from '@emotion/core'
import NavBar from '../components/Nav/NavBar'
import SiteContainer from '../components/Layout/SiteContainer'
import Footer from '../components/Sections/Footer'

class Layout extends React.PureComponent {
  render() {
    const { children } = this.props
    return (
      <React.Fragment>
        <Global styles={globalStyles} />
        <NavBar />
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
    --fontFamilySans: 'Libre Franklin', -apple-system, BlinkMacSystemFont,
      'Segoe UI', 'Roboto', 'Roboto Light', 'Oxygen', 'Ubuntu', 'Cantarell',
      'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    --fontFamilySerif: 'Libre Baskerville', 'Merriweather', 'Georgia', serif;
    --fontFamilyMono: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier,
      monospace;
    --fontWeightTitle: 800;
    --backgroundColor: #fff;
    --backgroundColorRGB: 255, 255, 255;
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
    background-color: var(--backgroundColor);
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

  em {
    font-style: normal;
    text-decoration: underline;
  }
`

export default Layout
