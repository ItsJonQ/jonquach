import React from 'react'
import styled from '@emotion/styled'
import Category from './Category'
import Link from './Link'

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
    const { category, excerpt, title, url } = this.props
    return (
      <LinkUI to={url}>
        <ArticleUI>
          <Category>{category}</Category>
          <TitleUI>
            <span>{title}</span>
          </TitleUI>
          <ExcerptUI dangerouslySetInnerHTML={{ __html: excerpt }} />
        </ArticleUI>
      </LinkUI>
    )
  }
}

const LinkUI = styled(Link)`
  color: var(--fontColor);
  display: block;

  &:hover {
    background: none;
  }
`

const ExcerptUI = styled('p')`
  font-family: 'Merriweather', 'serif';
  font-size: 0.9rem;
  transition: opacity 200ms ease;
`

const TitleUI = styled('h4')`
  color: black;
  font-size: 1.2rem;
  transition: color 200ms ease;
`

const ArticleUI = styled('article')`
  padding: 1em 0;

  ${ExcerptUI} {
    opacity: 0.5;
  }

  &:hover {
    ${TitleUI} {
      color: var(--brandColor);

      span {
        background: rgba(var(--brandColorRGB), 0.1);
      }
    }
    ${ExcerptUI} {
      opacity: 1;
    }
  }
`

export default PostSnippet
