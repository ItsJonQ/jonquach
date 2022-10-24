import styled from "@emotion/styled";
import Link from "next/link";
import Logo from "../logo/logo";
import { VisuallyHidden } from "@components/base/visually-hidden";

function NavLogo({ title = "Q", ...props }) {
	return (
		<Link href="/" passHref>
			<NavLogoUI {...props}>
				<AnimationUI>
					<div className="regular">
						<Logo width={34} />
					</div>
				</AnimationUI>
				<VisuallyHidden>{title}</VisuallyHidden>
			</NavLogoUI>
		</Link>
	);
}

const AnimationUI = styled("span")`
	@keyframes oBoy {
		0% {
			transform: rotate(-10deg) translateZ(0);
		}
		50% {
			transform: rotate(0deg) translateZ(0);
		}
		100% {
			transform: rotate(-10deg) translateZ(0);
		}
	}

	backface-visibility: hidden;
	filter: blur(0);
	display: block;
	width: 50px;
	height: 50px;
	position: relative;
	border-radius: 9999px;

	> * {
		position: absolute;
		top: 8px;
		left: 8px;
	}

	&:hover {
		animation: oBoy 400ms linear infinite;
	}
`;

const NavLogoUI = styled("a")`
	display: block;
	width: 50px;
	height: 50px;
	border-radius: 9999px;

	&:active {
		transition: transform 60ms linear;
		transform: translateY(2px);
	}
`;

export default NavLogo;
