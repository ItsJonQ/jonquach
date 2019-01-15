import React from 'react'
import Link from '../components/Base/Link'
import Layout from '../layouts'

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1>404. Oops!</h1>
        <br />
        <p>
          <Link to="/">Go Home</Link> 😅
        </p>
      </Layout>
    )
  }
}

export default NotFoundPage
