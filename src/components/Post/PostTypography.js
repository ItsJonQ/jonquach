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
  font-family: var(--fontFamilySerif);
  font-weight: 300;
  line-height: 1.7;

  h1 {
    font-size: 3.998rem;
  }
  h2 {
    font-size: 2.827rem;
  }
  h3 {
    font-size: 1.999rem;
  }
  h4 {
    font-size: 1.414rem;
  }
  h5 {
    font-size: 1rem;
  }
  h6 {
    font-size: 0.707rem;
  }

  &.has-dropCap {
    & > p {
      &:first-of-type {
        &:first-letter {
          color: var(--brandColor);
          display: block;
          float: left;
          font-size: 4rem;
          font-style: normal;
          font-weight: 700;
          line-height: 1;
          text-transform: uppercase;
          padding-right: 15px;
          padding-bottom: 5px;
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
    font-family: var(--fontFamilySans);
    font-weight: var(--fontWeightTitle);
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
      line-height: 1.4;
    }
  }

  & > blockquote {
    margin-bottom: 40px;
    margin-top: 40px;
    border-left: 3px solid var(--brandColor);
    font-weight: 300;
    font-size: 1.8rem;
    padding-left: 20px;
    line-height: 1.4;
  }

  & > .twitter-tweet ~ p {
    margin-top: 1.6em;
  }
`

export default Typography