import React from 'react'
import styled from '@emotion/styled'

export class Typography extends React.PureComponent {
  static defaultProps = {
    withDropCap: false,
  }

  render() {
    return <TypographyUI {...this.props} />
  }
}

const TypographyUI = styled('div')`
  line-height: 1.5;

  &.has-dropCap {
    & > p {
      &:first-of-type {
        &:first-letter {
          display: block;
          float: left;
          font-size: 52px;
          font-style: normal;
          font-weight: 700;
          line-height: 1;
          text-transform: uppercase;
          padding-right: 5px;
        }

        &::after {
          clear: both;
          content: '';
          display: block;
        }
      }
    }
  }

  & > h2,
  & > h3,
  & > h4,
  & > h5 {
    line-height: 1.2;
    margin-bottom: 0.8em;
  }

  > * + {
    h2,
    h3,
    h4,
    h5 {
      margin-top: 2.2em;
    }
  }

  & > ul,
  & > ol {
    margin-bottom: 1.6em;
    padding-left: 20px;
  }

  & > p {
    margin-bottom: 1.6em;

    &:first-of-type {
      font-size: 1.4rem;
      font-weight: 300;
      line-height: 1.2;

      @media (min-width: 768px) {
        font-size: 1.8rem;
      }
    }
  }

  & > blockquote {
    margin-bottom: 40px;
    margin-top: 40px;
    border-left: 3px solid #aaa;
    font-weight: 300;
    font-size: 180%;
    padding-left: 20px;
    line-height: 1.2;
  }

  & > .twitter-tweet ~ p {
    margin-top: 1.6em;
  }
`

export default Typography
