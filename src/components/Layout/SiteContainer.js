import styled from '@emotion/styled'

const SiteContainerUI = styled('div')`
  margin-left: auto;
  margin-right: auto;
  max-width: 710px;
  padding-left: 15px;
  padding-right: 15px;

  ${({ theme }) => theme.type === 'terminal' && `
    margin-left: 0;

    @media (min-width: 768px) {
      margin-left: 10%;
    }
  `}
`

export default SiteContainerUI
