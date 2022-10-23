import React from "react";
import styled from "@emotion/styled";
import Hr from "../base/hr";

const links = [
	{
		to: "https://github.com/itsjonq",
		title: "Github",
	},
	{
		to: "https://twitter.com/itsjonq",
		title: "Twitter",
	},
	{
		to: "https://github.com/itsjonq/jonquach",
		title: "View Source",
	},
];

function Footer(props) {
	const year = new Date().getFullYear();
	return (
		<>
			<Hr />
			<FooterUI {...props}>
				{}
				{links.length && (
					<ListUI>
						{links.map((link) => (
							<ListItemUI key={link.to}>
								<a href={link.to} target="_blank" rel="noreferrer">
									{link.title}
								</a>
							</ListItemUI>
						))}
					</ListUI>
				)}
				© {year}. Made by Q 🦄. <strong>Have a great day!</strong>
			</FooterUI>
		</>
	);
}

const FooterUI = styled("footer")`
	color: #999;
	font-size: 0.8rem;
	padding: 20px 0 40px;
	margin-bottom: 12vh;

	@media (min-width: 768px) {
		padding: 20px 0 80px;
	}
`;

const ListUI = styled("div")`
	margin-bottom: 10px;
	display: flex;
`;

const ListItemUI = styled("div")`
	margin: 0 20px 10px 0;
	font-size: 0.8rem;

	a {
		color: #777;
		cursor: pointer;

		&:hover {
			color: var(--brandColor);
		}
	}
`;

export default Footer;
