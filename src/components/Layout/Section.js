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
    padding-top: 40px;
    padding-bottom: 40px;

    @media (min-width: 768px) {
      padding-top: 60px;
      padding-bottom: 40px;
    }
  `}
`

SectionUI.defaultProps = {
  isCompact: true,
}

export default SectionUI