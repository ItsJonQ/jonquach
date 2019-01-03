import React from 'react'
import styled from '@emotion/styled'
import { formatReadingTime } from '../utils/helpers'

export class PostHeader extends React.PureComponent {
  static defaultProps = {
    date: 'January 1, 2019',
    timeToRead: '1 min read',
  }

  render() {
    const { date, timeToRead } = this.props
    return (
      <PostHeaderUI>
        {date}
        <SepUI>•</SepUI>
        {formatReadingTime(timeToRead)}
      </PostHeaderUI>
    )
  }
}

const PostHeaderUI = styled('div')`
  color: #aaa;
  font-size: 0.85rem;
  text-align: center;
`

const SepUI = styled('span')`
  opacity: 0.5;
  padding: 0 10px;
`

export default PostHeader
