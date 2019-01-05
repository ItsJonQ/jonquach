import React from 'react'
import styled from '@emotion/styled'
import Hr from '../Base/Hr'
import List from '../Base/List'
import Link from '../Base/Link'

const links = [
  {
    to: 'https://twitter.com/itsjonq',
    title: 'Twitter',
  },
  {
    to: 'https://github.com/itsjonq',
    title: 'Github',
  },
  {
    to: 'https://github.com/ItsJonQ/jonquach',
    title: 'View Source',
  },
]

export class Footer extends React.PureComponent {
  static defaultProps = {
    links,
  }

  render() {
    const { links } = this.props
    const year = new Date().getFullYear()

    return (
      <>
        <Hr />
        <FooterUI {...this.props}>
          {}
          {links.length && (
            <ListUI>
              {links.map(link => (
                <ListItemUI key={link.to}>
                  <Link to={link.to} target="_blank">
                    {link.title}
                  </Link>
                </ListItemUI>
              ))}
            </ListUI>
          )}
          © {year}. Made by Q 🐙. <strong>Have a great day!</strong>
        </FooterUI>
      </>
    )
  }
}

const FooterUI = styled('footer')`
  font-size: 0.8rem;
  color: #999;
  padding: 20px 0 40px;
  margin-bottom: 80px;

  @media (min-width: 768px) {
    padding: 20px 0 80px;
  }
`

const ListUI = styled(List)`
  margin-bottom: 10px;
`

const ListItemUI = styled(List.Item)`
  margin: 0 20px 10px 0;

  a {
    color: #777;

    &:hover {
      color: var(--brandColor);
    }
  }
`

export default Footer
