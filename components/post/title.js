import styled from "@emotion/styled";
import { css } from "@emotion/react";

const headerStyles = css`
	font-size: 2.75rem;
	font-weight: 800;
	line-height: 1.1;
	margin: 20px auto;

	@media (min-width: 768px) {
		font-size: 3.5rem;
		line-height: 1.1;
		letter-spacing: -2px;
	}
`;

export default function PostTitle({ children }) {
	return (
		<header>
			<h1 className={headerStyles}>{children}</h1>
		</header>
	);
}
