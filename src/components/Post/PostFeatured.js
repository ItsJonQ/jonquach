import React from 'react'
import styled from '@emotion/styled'
import Category from '../Meta/Category'
import TopCaption from '../Meta/TopCaption'
import SectionMetaTitle from '../Meta/SectionMetaTitle'
import PostHeader from './PostHeader'
import PostMeta from './PostMeta'
import PostLead from './PostLead'
import Section from '../Layout/Section'
import Link from '../Base/Link'

export class PostFeatured extends React.PureComponent {
  static defaultProps = {
    category: undefined,
    excerpt: undefined,
    url: '/',
    title: 'Title',
  }

  render() {
    const { category, excerpt, title, url } = this.props
    return (
      <LinkUI to={url}>
        <MetaTitleUI>Latest Post</MetaTitleUI>
        <Category>{category}</Category>
        <TitleUI>
          <span>{title}</span>
        </TitleUI>
        {excerpt && <PostLead>{excerpt}</PostLead>}
      </LinkUI>
    )
  }
}

const TitleUI = styled(PostHeader)``

const LinkUI = styled(Link)`
  color: var(--fontColor);
  display: block;

  &:hover {
    background: none;

    ${TitleUI} {
      color: var(--brandColor);

      span {
        background: rgba(var(--brandColorRGB), 0.1);
      }
    }
  }
`

const MetaTitleUI = styled(SectionMetaTitle)`
  margin-bottom: 20px;
  margin-top: 50px;
`

export default PostFeatured
