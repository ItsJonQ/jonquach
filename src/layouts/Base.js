import React from 'react'
import NavBar from '../components/Nav/NavBar'
import SiteContainer from '../components/Layout/SiteContainer'
import Footer from '../components/Sections/Footer'

class Layout extends React.PureComponent {
  render() {
    const { children } = this.props
    return (
      <React.Fragment>
        <NavBar />
        <SiteContainer>
          {children}
          <Footer />
        </SiteContainer>
      </React.Fragment>
    )
  }
}

export default Layout
