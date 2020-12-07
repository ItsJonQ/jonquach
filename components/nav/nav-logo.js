import { styled } from '@wp-g2/styles';
import Link from 'next/link';
import Logo from '../logo/logo';
import LogoHappy from '../logo/logo-happy';
import { VisuallyHidden } from '@wp-g2/components';

function NavLogo({ title = 'Q', ...props }) {
	return (
		<Link href="/" passHref>
			<NavLogoUI {...props}>
				<AnimationUI>
					<div className="regular">
						<Logo width={34} />
					</div>
					<div className="happy">
						<LogoHappy width={34} />
					</div>
				</AnimationUI>
				<VisuallyHidden>{title}</VisuallyHidden>
			</NavLogoUI>
		</Link>
	);
}

const AnimationUI = styled('span')`
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

	.happy {
		display: none;
	}

	&:hover {
		animation: oBoy 400ms linear infinite;

		.regular {
			display: none;
		}

		.happy {
			display: block;
		}
	}
`;

const NavLogoUI = styled('a')`
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
