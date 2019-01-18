import React from 'react'
import styled from '@emotion/styled'
import { formatReadingTime } from '../../utils/helpers'

export class PostHeader extends React.PureComponent {
  static defaultProps = {
    date: null,
    timeToRead: null,
  }

  render() {
    const { date, timeToRead, ...rest } = this.props
    return (
      <PostHeaderUI {...rest}>
        {date}
        {timeToRead && (
          <React.Fragment>
            <SepUI>•</SepUI>
            {formatReadingTime(timeToRead)}
          </React.Fragment>
        )}
      </PostHeaderUI>
    )
  }
}

const PostHeaderUI = styled('div')`
  color: #aaa;
  font-size: 0.85rem;
`

const SepUI = styled('span')`
  opacity: 0.5;
  padding: 0 10px;
`

export default PostHeader
