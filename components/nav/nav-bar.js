import Link from "next/link";
import NavLogo from "./nav-logo";
import styled from "@emotion/styled";
import SiteContainer from "../layout/site-container";

const links = [
	{
		to: "/about",
		title: "About",
	},
	{
		to: "https://notes.jonquach.com",
		title: "Notes",
	},
	{
		to: "/posts",
		title: "Posts",
	},
	{
		to: "/contact",
		title: "Contact",
	},
];

function NavBar() {
	return (
		<SiteContainer>
			<NavBarUI role="navigation">
				<MenuUI role="menubar">
					<MenuItemUI role="menuitem" className="is-logo">
						<NavLogo />
					</MenuItemUI>
					{links.map((link) => (
						<MenuItemUI key={link.to} role="menuitem">
							<Link href={link.to} passHref>
								<NavLinkUI>{link.title}</NavLinkUI>
							</Link>
						</MenuItemUI>
					))}
				</MenuUI>
			</NavBarUI>
		</SiteContainer>
	);
}

const NavBarUI = styled("div")`
	padding: 20px 0;
`;

const MenuUI = styled("div")`
	display: flex;
`;

const MenuItemUI = styled("div")`
	cursor: pointer;
	padding: 15px 3px;

	@media (min-width: 768px) {
		padding: 15px 7px;
	}

	&.is-logo {
		padding-left: 0;
		padding-top: 0;
		padding-bottom: 0;
		margin-right: 0px;
		margin-left: -10px;

		@media (min-width: 768px) {
			margin-right: 15px;
		}
	}
`;

const NavLinkUI = styled("a")`
	color: black;
	font-weight: 700;
	font-size: 0.8rem;
	padding: 5px 5px;
`;

export default NavBar;
