import styled from "@emotion/styled";
import { css } from "@emotion/react";

const compact = ({ isCompact }) => {
	if (!isCompact) return;

	return css`
		padding-top: 20px;
		padding-bottom: 20px;

		@media (min-width: 768px) {
			padding-top: 40px;
			padding-bottom: 20px;
		}
	`;
};

const SectionUI = styled("section")`
	padding: 20px 0 20px;

	${compact};
`;

SectionUI.defaultProps = {
	isCompact: true,
};

export default SectionUI;
