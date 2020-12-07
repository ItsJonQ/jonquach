import React from 'react';
import { styled } from '@wp-g2/styles';

const SectionMetaTitleUI = styled('div')`
	margin-top: 10px;
	margin-bottom: 10px;
`;

const TitleUI = styled('span')`
	border: 1px solid rgba(var(--brandColorRGB), 0.2);
	color: var(--brandColor);
	font-size: 0.6rem;
	font-weight: 800;
	letter-spacing: 1px;
	line-height: 1;
	padding: 1px 3px;
	text-transform: uppercase;
`;

function SectionMetaTitle({ children, ...props }, ref) {
	return (
		<SectionMetaTitleUI {...props} ref={ref}>
			<TitleUI>{children}</TitleUI>
		</SectionMetaTitleUI>
	);
}

export default React.forwardRef(SectionMetaTitle);
