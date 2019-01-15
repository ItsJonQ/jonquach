import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

export class PostFeaturedImage extends React.PureComponent {
  static defaultProps = {
    src: {},
  }

  render() {
    return (
      <FeaturedImageUI>
        <Img fluid={this.props.src} />
      </FeaturedImageUI>
    )
  }
}

const FeaturedImageUI = styled('div')`
  margin-bottom: 2em;
`

export default PostFeaturedImage
