import React from "react";
import { css, cx } from "@emotion/css";
import styled from "@emotion/styled";

const AspectRatioView = styled.div`
	max-width: 100%;
	position: relative;
	width: 100%;
`;

const content = css`
	height: 100%;
	left: 0;
	position: absolute;
	top: 0;
	width: 100%;
`;

const AspectRatioResizer = styled.div`
	height: 0;
	pointer-events: none;
`;

export const AspectRatio = React.forwardRef((props, forwardedRef) => {
	const { children, className, ratio = 1, width, ...otherProps } = props;

	const classes = cx(css({ maxWidth: width }), className);
	const resizerClasses = cx(
		css({
			paddingBottom: `${(1 / ratio) * 100}%`,
		}),
	);

	return (
		<AspectRatioView {...otherProps} className={classes} ref={forwardedRef}>
			{children}
			<AspectRatioResizer aria-hidden className={resizerClasses} />
		</AspectRatioView>
	);
});
