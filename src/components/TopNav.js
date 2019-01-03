import React from 'react'
import NavLogo from './NavLogo'
import styled from '@emotion/styled'
import SiteContainer from './SiteContainer'
import { Link } from 'gatsby'

export class TopNav extends React.PureComponent {
  static defaultProps = {
    links: [
      {
        to: 'about/',
        title: 'About',
      },
      {
        to: 'posts/',
        title: 'Writing',
      },
      {
        to: 'contact/',
        title: 'Contact',
      },
    ],
  }

  render() {
    const { links } = this.props
    return (
      <SiteContainer>
        <TopNavUI role="navigation">
          <MenuUI role="menubar">
            <MenuItemUI role="menuitem" className="is-logo">
              <NavLogo />
            </MenuItemUI>
            {links.map(link => (
              <MenuItemUI key={link.to} role="menuitem">
                <NavLinkUI
                  to={link.to}
                  activeClassName="is-active"
                  exact={false}
                >
                  {link.title}
                </NavLinkUI>
              </MenuItemUI>
            ))}
          </MenuUI>
        </TopNavUI>
      </SiteContainer>
    )
  }
}

const TopNavUI = styled('div')`
  margin: 20px 0;
`

const MenuUI = styled('ul')`
  list-style: none;
  overflow: hidden;
`

const MenuItemUI = styled('li')`
  float: left;
  padding: 15px 7px;

  &.is-logo {
    padding-left: 0;
    padding-top: 0;
    padding-bottom: 0;
    margin-right: 15px;
    position: sticky;
    top: 0;
  }
`

const NavLinkUI = styled(Link)`
  color: black;
  font-weight: 700;
  font-size: 14px;
  padding: 5px 5px;

  &.is-active {
  }
`

export default TopNav
