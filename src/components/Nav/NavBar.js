import React from 'react'
import get from 'lodash/get'
import { StaticQuery, graphql } from 'gatsby'
import NavLogo from './NavLogo'
import styled from '@emotion/styled'
import Link from '../Base/Link'
import List from '../Base/List'
import SiteContainer from '../Layout/SiteContainer'

export class NavBar extends React.PureComponent {
  static defaultProps = {
    links: [],
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

const MenuUI = styled(List)`
  display: flex;
`

const MenuItemUI = styled(List.Item)`
  padding: 15px 7px;

  &.is-logo {
    padding-left: 0;
    padding-top: 0;
    padding-bottom: 0;
    margin-right: 0px;
    position: sticky;
    top: 0;
    margin-left: -10px;

    @media (min-width: 768px) {
      margin-right: 15px;
    }
  }
`

const NavLinkUI = styled(Link)`
  color: black;
  font-weight: 700;
  font-size: 0.8rem;
  padding: 5px 5px;
`

function getLinksFromData(data) {
  const nodes = get(data, 'allNavYaml.edges', [])
  return nodes.map(({ node }) => node)
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        allNavYaml {
          edges {
            node {
              to
              title
            }
          }
        }
      }
    `}
    render={data => <NavBar links={getLinksFromData(data)} />}
  />
)
