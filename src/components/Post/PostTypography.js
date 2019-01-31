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
  font-weight: var(--fontWeightBase);
  line-height: 1.7;

  strong {
    font-weight: bold;
  }

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

  ${({ withDropCap }) =>
    withDropCap &&
    `
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
  `}

  ${({ theme }) =>
    theme.type === 'terminal' &&
    `
    & > p {
      &:first-of-type {
        &:first-letter {
          display: inline;
          font-size: inherit;
          float: none;
          padding: 0;
        }
      }
    }
  `}

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
      font-size: 1.3rem;
      font-weight: 300;
      line-height: 1.4;
    }
  }

  & > blockquote {
    margin-bottom: 40px;
    margin-top: 40px;
    border-left: 3px solid var(--brandColor);
    font-weight: 300;
    font-size: 1.6rem;
    padding-left: 20px;
    line-height: 1.4;
  }

  & > .twitter-tweet ~ p {
    margin-top: 1.6em;
  }

  a[href*="https://gfycat.com"] {
    font-size: 0.7rem;
    opacity: 0.4;
  }

  .gatsby-resp-image-wrapper {
    border: 1px solid rgba(0, 0, 0, 0.08);
  }

  .gatsby-resp-image-link:hover {
    background: none;
  }

  .gatsby-resp-iframe-wrapper {
    margin: 1.6em 0 2em !important;
  }

  .gatsby-highlight,
  .gatsby-resp-image-figure {
    margin: 1.6em 0;
  }

  .gatsby-resp-image-figcaption {
    color: #888;
    margin-top: 0.5em;
    font-size: 0.8rem;
  }

  hr {
    width: 100%;
    height: 0;
    border: 0;
    border-bottom: 1px solid var(--fontColor);
    opacity: 0.08;
    margin: 3em 0;
  }

  iframe[src*="https://codesandbox"] {
    margin: 1.6em 0 2em !important;
  }
`

export default Typography
