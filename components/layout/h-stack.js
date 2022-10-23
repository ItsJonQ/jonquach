import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { cx } from "@emotion/css";

const HStackUI = styled("div")({
	"--gap": "8px",
	display: "flex",
	gap: "var(--gap)",
});

const toPx = (value = 1) => `${value * 4}px`;

export const HStack = React.forwardRef(
	({ className, children, gap = 1, ...props }, ref) => {
		const classes = cx({ "--gap": toPx(gap) }, className);

		return (
			<HStackUI ref={ref} className={classes} {...props}>
				{children}
			</HStackUI>
		);
	},
);
