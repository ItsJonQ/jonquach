import React from 'react'
import styled from '@emotion/styled'

export const PostStatus = props => {
  const { status } = props
  const development = status === 'development'
  const inactive = status === 'inactive'
  const active = !development && !inactive

  let label = 'Active'
  if (development) {
    label = 'In Development'
  }
  if (inactive) {
    label = 'Inactive'
  }
  return (
    <StatusUI development={development} active={active} inactive={inactive}>
      {label}
    </StatusUI>
  )
}

const StatusUI = styled('div')`
  border-radius: 4px;
  color: white;
  display: inline-block;
  font-size: 10px;
  font-weight: bold;
  line-height: 1;
  padding: 2px 4px;
  position: absolute;
  right: 10px;
  text-transform: uppercase;
  top: 10px;

  ${props =>
    props.active &&
    `
    background: linear-gradient(#00E676, #00C853);
    box-shadow: 0 2px 10px rgba(0, 230, 118, 0.4);
  `}

  ${props =>
    props.development &&
    `
    background: linear-gradient(#ff4081, #f50057);
    box-shadow: 0 2px 10px rgba(255, 65, 129, 0.4);
  `}

  ${props =>
    props.inactive &&
    `
    background: linear-gradient(#FFEA00, #FFAB00);
    box-shadow: 0 2px 10px rgba(255, 234, 0, 0.4);
  `}
`

export default PostStatus
