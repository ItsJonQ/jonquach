import React from 'react'
import Link from '../Base/Link'

export class PreviousNext extends React.PureComponent {
  static defaultProps = {
    previous: undefined,
    next: undefined,
  }

  render() {
    const { previous, next } = this.props

    return (
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          listStyle: 'none',
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    )
  }
}

export default PreviousNext
