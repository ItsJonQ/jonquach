import React from 'react'
import styled from '@emotion/styled'
import Category from './Category'
import TopCaption from './TopCaption'
import PostHeader from './PostHeader'
import PostMeta from './PostMeta'
import Section from './Section'

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
      <Section isCompact>
        <TopCaption>{topCaption}</TopCaption>
        <Category>{category}</Category>
        <PostHeader>{title}</PostHeader>
        <PostMeta date={date} timeToRead={timeToRead} />
      </Section>
    )
  }
}

export default PostIntro
