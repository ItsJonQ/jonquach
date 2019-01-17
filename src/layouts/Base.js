import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import NavBar from '../components/Nav/NavBar'
import SiteContainer from '../components/Layout/SiteContainer'
import Footer from '../components/Sections/Footer'

class Layout extends React.PureComponent {
  state = {
    theme: 'default'
  }

  componentDidMount() {
    // this.setTheme('terminal')
  }

  setTheme(theme) {
    document.body.classList.add(`theme-${theme}`)
    this.setState({
      theme
    })
  }

  render() {
    const { children } = this.props
    return (
      <ThemeProvider theme={{type: this.state.theme}}>
        <React.Fragment>
          <NavBar />
          <SiteContainer>
            {children}
            <Footer />
          </SiteContainer>
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

export default Layout
