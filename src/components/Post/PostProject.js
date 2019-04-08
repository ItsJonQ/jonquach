import React from 'react'
import styled from '@emotion/styled'
import Category from '../Meta/Category'
import PostStatus from './PostStatus'

export class PostSnippet extends React.PureComponent {
  static defaultProps = {
    category: null,
    url: '/',
    excerpt: 'Excerpt',
    title: 'Title',
    date: 'January 1, 2019',
    timeToRead: null,
  }

  render() {
    const {
      category,
      description,
      github,
      html,
      icon,
      status,
      title,
    } = this.props

    return (
      <CardUI href={github} target="_blank">
        <HeaderUI>
          <Category>{category}</Category>
          <PostStatus status={status} />
          <IconUI>{icon}</IconUI>
          <TitleUI>
            <span>{title}</span>
          </TitleUI>
          <DescriptionUI>{description}</DescriptionUI>
        </HeaderUI>
        <ExcerptUI dangerouslySetInnerHTML={{ __html: html }} />
      </CardUI>
    )
  }
}

const CardUI = styled('a')`
  background: rgb(255, 255, 255);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px, rgba(0, 0, 0, 0.06) 0px 8px 20px;
  color: currentColor;
  cursor: pointer;
  display: block;
  height: 100%;
  height: 100%;
  margin: 0 0 1.2em;
  padding: 2em 1.8em 2.2em;
  position: relative;
  text-align: center;
  transition: all 300ms ease 0s;
  width: 100%;
  width: 100%;

  &:hover {
    background: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 8px,
      rgba(0, 0, 0, 0.12) 0px 12px 30px;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px,
      rgba(0, 0, 0, 0.06) 0px 8px 20px;
    transform: translateY(1px);
  }
`

const HeaderUI = styled('header')`
  text-align: center;
  margin-bottom: 20px;
`

const IconUI = styled('div')`
  font-size: 48px;
  display: block;
  text-align: center;
  line-height: 1;
  margin: 30px 0 20px;
`

const DescriptionUI = styled('p')`
  font-size: 0.9rem;
  opacity: 0.4;
  line-height: 1.4;
  margin: 5px auto 10px;
  max-width: 80%;
`

const ExcerptUI = styled('div')`
  font-family: var(--fontFamilySerif);
  font-size: 0.9rem;
  transition: opacity 200ms ease;
  line-height: 1.5;

  p {
    margin-bottom: 1.2em;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

const TitleUI = styled('h4')`
  color: black;
  font-size: 1.6rem;
  transition: color 200ms ease;
  margin-bottom: 5px;
`

export default PostSnippet
