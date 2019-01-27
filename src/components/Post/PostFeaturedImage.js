import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

export class PostFeaturedImage extends React.PureComponent {
  static defaultProps = {
    src: {},
  }

  render() {
    const { src } = this.props
    return (
      <FeaturedImageUI>
        {typeof src === 'string' ? (
          <PlainImage src={src} />
        ) : (
          <Img fluid={src} />
        )}
      </FeaturedImageUI>
    )
  }
}

const FeaturedImageUI = styled('div')`
  margin-bottom: 2em;
`

const PlainImage = styled('img')`
  max-width: 100%;
  height: auto;
  display: block;
  margin: auto;
`

export default PostFeaturedImage
