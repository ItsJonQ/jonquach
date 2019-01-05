import React from 'react'
import styled from '@emotion/styled'
import Link from './Link'
import Logo from './Logo'
import LogoHappy from './LogoHappy'
import VisuallyHidden from './VisuallyHidden'

export class NavLogo extends React.PureComponent {
  static defaultProps = {
    title: 'Q',
    to: '/',
  }

  render() {
    const { title } = this.props

    return (
      <NavLogoUI {...this.props}>
        <AnimationUI>
          <div className="regular">
            <Logo width={34} />
          </div>
          <div className="happy">
            <LogoHappy width={34} />
          </div>
        </AnimationUI>
        <VisuallyHidden>{title}</VisuallyHidden>
      </NavLogoUI>
    )
  }
}

const AnimationUI = styled('span')`
  @keyframes oBoy {
    0% {
      transform: rotate(-10deg) translateZ(0);
    }
    50% {
      transform: rotate(0deg) translateZ(0);
    }
    100% {
      transform: rotate(-10deg) translateZ(0);
    }
  }

  backface-visibility: hidden;
  filter: blur(0);
  display: block;
  width: 50px;
  height: 50px;
  position: relative;
  border-radius: 9999px;

  > * {
    position: absolute;
    top: 8px;
    left: 8px;
  }

  .happy {
    display: none;
  }

  &:hover {
    animation: oBoy 400ms linear infinite;

    .regular {
      display: none;
    }

    .happy {
      display: block;
    }
  }
`

const NavLogoUI = styled(Link)`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 9999px;

  &:active {
    transition: transform 60ms linear;
    transform: translateY(2px);
  }
`

export default NavLogo
