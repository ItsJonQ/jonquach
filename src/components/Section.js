import styled from '@emotion/styled'

const SectionUI = styled('section')`
  padding: 40px 0;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    padding: 80px 0;
  }

  ${({ isCompact }) =>
    isCompact &&
    `
    padding-bottom: 40px;

    @media (min-width: 768px) {
      padding-bottom: 40px;
    }
  `}
`

export default SectionUI
