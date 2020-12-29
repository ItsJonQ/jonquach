import Highlight, { defaultProps } from "prism-react-renderer";
import nightOwl from "prism-react-renderer/themes/nightOwl";

function SyntaxHighlighter(props) {
	const { children } = props;

	const code = children.props.children?.trim?.();
	const matches = children.props.className?.match(/language-(?<lang>.*)/);
	const language = matches?.groups?.lang || "";

	return (
		<Highlight
			{...defaultProps}
			code={code}
			language={language}
			theme={nightOwl}
		>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre className={className} style={style}>
					{tokens.map((line, i) => (
						<div {...getLineProps({ line, key: i })}>
							{line.map((token, key) => (
								<span {...getTokenProps({ token, key })} />
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	);
}

export default SyntaxHighlighter;
