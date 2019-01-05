import styled from '@emotion/styled'

const HrUI = styled('hr')`
  width: 100%;
  height: 0;
  border: 0;
  border-bottom: 1px solid var(--fontColor);
  opacity: 0.08;
  margin: 60px 0;
`

HrUI.defaultProps = {
  role: 'presentation',
}

export default HrUI
