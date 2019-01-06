import React from 'react'
import styled from '@emotion/styled'
import Link from '../Base/Link'
import Hr from '../Base/Hr'
import TopCaption from '../Meta/TopCaption'

export class PreviousNext extends React.PureComponent {
  static defaultProps = {
    previous: undefined,
    next: undefined,
  }

  render() {
    const { previous, next } = this.props

    return (
      <section>
        <Hr />
        <header>
          <TopCaption>More Posts</TopCaption>
        </header>
        <ListUI>
          {previous && (
            <ListItemUI>
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            </ListItemUI>
          )}
          {next && (
            <ListItemUI>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            </ListItemUI>
          )}
        </ListUI>
      </section>
    )
  }
}

const ListUI = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`

const ListItemUI = styled('li')`
  margin-bottom: 10px;
`

export default PreviousNext
