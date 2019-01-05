import React from 'react'
import styled from '@emotion/styled'
import Section from '../Layout/Section'
import PostLead from '../Post/PostLead'
import List from '../Base/List'
import Image from '../Base/Image'
import npm from '../../images/logo--npm.png'
import webpack from '../../images/logo--webpack.png'
import iDoneThis from '../../images/logo--idonethis.png'
import google from '../../images/logo--google.png'

const lovelyFolks = [
  {
    src: npm,
    title: 'npm',
  },
  {
    src: google,
    title: 'Google',
  },
  {
    src: webpack,
    title: 'Webpack',
  },
  {
    src: iDoneThis,
    title: 'iDoneThis',
  },
]

export class Showcase extends React.PureComponent {
  static defaultProps = {
    items: lovelyFolks,
  }

  render() {
    const { items } = this.props
    return (
      <Section>
        <LeadUI>Some awesome folks I've worked with</LeadUI>
        <ListUI>
          {items.map(item => (
            <ItemUI key={item.title}>
              <Image src={item.src} title={item.title} alt={item.title} />
            </ItemUI>
          ))}
        </ListUI>
      </Section>
    )
  }
}

const LeadUI = styled(PostLead)`
  font-family: var(--fontFamilySans);
  font-size: 1rem;
  opacity: 0.5;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`

const ListUI = styled(List)`
  align-content: center;
  justify-content: space-between;
`

const ItemUI = styled(List.Item)`
  margin: 0 10px;
  opacity: 0.3;
  transition: opacity 200ms ease;

  @media (min-width: 768px) {
    padding: 0 20px;
  }

  &:hover {
    opacity: 0.5;
  }
`

export default Showcase
