import { View } from '@wp-g2/components';
import { css } from '@wp-g2/styles';

const headerStyles = css`
	font-size: 2.75rem;
	font-weight: 800;
	line-height: 1.1;
	margin: 20px auto;

	@media (min-width: 768px) {
		font-size: 3.5rem;
		line-height: 1.1;
		letter-spacing: -2px;
	}
`;

export default function PostTitle({ children }) {
	return (
		<header>
			<View as="h1" className={headerStyles}>
				{children}
			</View>
		</header>
	);
}
