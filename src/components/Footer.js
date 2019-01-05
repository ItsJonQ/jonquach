import React from 'react'
import styled from '@emotion/styled'

export class Footer extends React.PureComponent {
  render() {
    const year = new Date().getFullYear()

    return (
      <FooterUI>
        © {year}. Made by Q 🐙. <strong>Have a great day!</strong>
      </FooterUI>
    )
  }
}

const FooterUI = styled('footer')`
  font-size: 0.8rem;
  color: #999;
  padding: 40px 0;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    padding: 80px 0;
  }
`

export default Footer
