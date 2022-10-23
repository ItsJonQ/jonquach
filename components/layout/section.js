import styled from "@emotion/styled";
import { css } from "@emotion/react";

const compact = ({ isCompact }) => {
	if (!isCompact) return;

	return css`
		padding-top: 40px;
		padding-bottom: 40px;

		@media (min-width: 768px) {
			padding-top: 60px;
			padding-bottom: 40px;
		}
	`;
};

const SectionUI = styled("section")`
	padding: 40px 0;

	@media (min-width: 768px) {
		padding: 80px 0;
	}

	${compact};
`;

SectionUI.defaultProps = {
	isCompact: true,
};

export default SectionUI;
