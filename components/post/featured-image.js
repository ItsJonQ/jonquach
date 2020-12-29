import React from "react";
import Image from "next/image";
import { styled } from "@wp-g2/styles";

function PostFeaturedImage({ src }) {
	return (
		<FeaturedImageUI>
			<PlainImage src={src} height="1080" width="1920" priority />
		</FeaturedImageUI>
	);
}

const FeaturedImageUI = styled("div")`
	margin-bottom: 2em;
	position: relative;
`;

const PlainImage = styled(Image)`
	max-width: 100%;
	height: auto;
	display: block;
	margin: auto;
`;

export default PostFeaturedImage;
