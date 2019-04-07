import styled from '@emotion/styled'

const Col = styled('div')`
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 20px;
  width: 100%;

  @media (min-width: 710px) {
    width: 50%;
  }
`

export default Col
