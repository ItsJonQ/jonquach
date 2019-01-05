import styled from '@emotion/styled'

const FadeTopUI = styled('div')`
  height: 10vh;
  position: sticky;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  pointer-events: none;
  background: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  margin-bottom: -10vh;
`

export default FadeTopUI
