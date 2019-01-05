import React from 'react'
import NavLogo from './NavLogo'
import styled from '@emotion/styled'
import Link from '../Base/Link'
import SiteContainer from '../Layout/SiteContainer'

export class NavBar extends React.PureComponent {
  static defaultProps = {
    links: [
      {
        to: '/about/',
        title: 'About',
      },
      {
        to: '/posts/',
        title: 'Writing',
      },
      {
        to: '/contact/',
        title: 'Contact',
      },
    ],
  }

  render() {
    const { links } = this.props
    return (
      <SiteContainer>
        <NavBarUI role="navigation">
          <MenuUI role="menubar">
            <MenuItemUI role="menuitem" className="is-logo">
              <NavLogo />
            </MenuItemUI>
            {links.map(link => (
              <MenuItemUI key={link.to} role="menuitem">
                <NavLinkUI to={link.to} activeClassName="is-active">
                  {link.title}
                </NavLinkUI>
              </MenuItemUI>
            ))}
          </MenuUI>
        </NavBarUI>
      </SiteContainer>
    )
  }
}

const NavBarUI = styled('div')`
  margin: 20px 0;
`

const MenuUI = styled('ul')`
  display: flex;
  list-style: none;
`

const MenuItemUI = styled('li')`
  padding: 15px 7px;

  &.is-logo {
    padding-left: 0;
    padding-top: 0;
    padding-bottom: 0;
    margin-right: 15px;
    position: sticky;
    top: 0;
    margin-left: -10px;
  }
`

const NavLinkUI = styled(Link)`
  color: black;
  font-weight: 700;
  font-size: 14px;
  padding: 5px 5px;
`

export default NavBar
