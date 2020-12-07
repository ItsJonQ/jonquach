import { View } from '@wp-g2/components';
import { css } from '@wp-g2/styles';

const textStyles = css`
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.7;
	color: #353637;

	p {
		margin: 0 0 1.6em;

		&:first-of-type {
			font-size: 1.5em;
			font-weight: 300;
			line-height: 1.4;
			letter-spacing: -0.5px;
		}
	}
`;

const codeStyles = css`
	code {
		font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
		padding: 0.2em 0.4em;
		margin: 0;
		font-size: 85%;
		background-color: rgba(27, 31, 35, 0.05);
		border-radius: 6px;
	}
`;

const headingStyles = css`
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-weight: 800;
		line-height: 1.2;
		color: #121314;
		margin: 1em 0 0.8em;
	}

	h1 {
		font-size: 3rem;
	}
	h2 {
		font-size: 2.5rem;
	}
	h3 {
		font-size: 2rem;
	}
	h4 {
		font-size: 1.5rem;
	}
	h5 {
		font-size: 1.25rem;
	}
	h6 {
		font-size: 1rem;
	}

	* + h2,
	* + h3,
	* + h4 {
		margin-top: 2.2em;
	}

	* + h4,
	* + h5,
	* + h6 {
		margin-top: 2.5em;
	}
`;

const imageStyles = css`
	img {
		max-width: 100%;
		height: auto;
	}
`;

const listStyles = css`
	ul,
	ol {
		margin-bottom: 1.6em;
		padding-left: 20px;
	}
`;

const syntaxHighlighterStyles = css`
	.remark-highlight {
		margin: 2em 0;

		& > pre {
			border-radius: 12px;
		}

		code {
			padding: 0;
		}
	}
`;

const embedStyles = css`
	iframe[src*="https://codesandbox"],
	iframe[src*="https://youtube"],
	iframe[src*="https://www.youtube"]
	{
		margin: 1.6em 0px 2em !important;
	}

	iframe[src*="https://youtube"],
	iframe[src*="https://www.youtube"]
	{
		width: 100%;
	}
`;

const blockQuoteStyles = css`
	blockquote {
		margin: 40px 0;
		border-left: 3px solid var(--brandColor);
		font-weight: 300;
		font-size: 1.25em;
		letter-spacing: -0.5px;
		padding-left: 20px;
		line-height: 1.4;
	}
`;

const hrStyles = css`
	hr {
		width: 100%;
		height: 0;
		border: 0;
		border-bottom: 1px solid black;
		opacity: 0.08;
		margin: 2em 0;
	}
`;

const contentStyles = css`
	${textStyles};
	${codeStyles};
	${headingStyles};
	${listStyles};
	${imageStyles};
	${syntaxHighlighterStyles};
	${embedStyles};
	${blockQuoteStyles};
	${hrStyles};
`;

export default function PostBody({ content }) {
	return (
		<View
			dangerouslySetInnerHTML={{ __html: content }}
			className={contentStyles}
		/>
	);
}
