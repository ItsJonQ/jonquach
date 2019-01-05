import React from 'react'
import Category from '../Meta/Category'
import TopCaption from '../Meta/TopCaption'
import PostHeader from './PostHeader'
import PostMeta from './PostMeta'

export class PostIntro extends React.PureComponent {
  static defaultProps = {
    topCaption: undefined,
    category: undefined,
    title: 'Title',
    date: undefined,
    timeToRead: undefined,
  }

  render() {
    const { date, topCaption, category, title, timeToRead } = this.props

    return (
      <>
        <TopCaption>{topCaption}</TopCaption>
        <Category>{category}</Category>
        <PostHeader>{title}</PostHeader>
        <PostMeta date={date} timeToRead={timeToRead} />
      </>
    )
  }
}

export default PostIntro
