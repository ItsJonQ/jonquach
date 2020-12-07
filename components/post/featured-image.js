import React from 'react';
import { styled } from '@wp-g2/styles';

function PostFeaturedImage({ src }) {
	return (
		<FeaturedImageUI>
			<PlainImage src={src} />
		</FeaturedImageUI>
	);
}

const FeaturedImageUI = styled('div')`
	margin-bottom: 2em;
`;

const PlainImage = styled('img')`
	max-width: 100%;
	height: auto;
	display: block;
	margin: auto;
`;

export default PostFeaturedImage;
