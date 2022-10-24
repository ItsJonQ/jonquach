import styled from "@emotion/styled";

const HeaderView = styled("h1")`
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
			<HeaderView>{children}</HeaderView>
		</header>
	);
}
