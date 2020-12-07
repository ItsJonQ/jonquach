import { styled } from '@wp-g2/styles';

function Logo({ color = 'var(--brandColor)', width = 200 }) {
	const height = width;

	const style = {
		width,
		height,
	};

	return (
		<LogoUI style={style}>
			<svg
				enableBackground="new 0 0 460 460"
				viewBox="0 0 460 460"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="m164.71 304.94c-1.01-5.43 2.57-10.65 8-11.66s10.65 2.57 11.66 8l9.61 51.61c1.01 5.43-2.57 10.65-8 11.66-.62.12-1.24.17-1.84.17-4.72 0-8.92-3.36-9.82-8.17zm132.5 28.72c.9 4.81 5.1 8.17 9.82 8.17.61 0 1.22-.06 1.84-.17 5.43-1.01 9.01-6.23 8-11.66l-9.61-51.61c-1.01-5.43-6.24-9.01-11.66-8-5.43 1.01-9.01 6.23-8 11.66zm157.98-110.61-15.18 109.63c-.4 2.86-2.21 5.32-4.82 6.54-1.55.72-3.1 1.43-4.64 2.12l1.01 9.67c1.47 14.14-6.16 27.31-18.98 32.76-21.64 9.2-70.12 26.91-151.58 42.09-69.32 12.91-117.02 15.52-144.18 15.52-4.76 0-8.88-.08-12.39-.2-13.93-.47-25.79-10.01-29.51-23.73l-2.48-9.14c-2.03-.1-4.08-.22-6.14-.36-2.88-.2-5.46-1.84-6.85-4.36l-53.66-96.83c-1.13-2.04-1.37-4.46-.67-6.69s2.29-4.06 4.4-5.08c.67-.33 11.32-5.44 29.03-11.76l-22.55-83.23c-.6-2.2-.14-4.46 1.07-6.22 34.33-73.67 86.4-117.23 124.13-140.82 41.19-25.75 73.99-33.8 75.36-34.13 2.97-.71 6.07.47 7.81 2.98s1.75 5.83.04 8.36l-30.91 45.66c62.11-20.59 114.34-32.47 155.48-35.33 30.05-2.09 49.94 1.33 54.05 5.8 2 2.17 2.54 5.37 1.33 8.06-.84 1.89-2.45 3.31-4.35 3.98-3.24 1.76-17.77 11.64-34.65 23.36 51.68-1.04 82.18 21.29 83.66 22.4 2.15 1.61 3.26 4.26 2.89 6.92-.36 2.66-2.14 4.92-4.65 5.89l-38.55 15.01 8.43 80.94c18.22-.42 29.58.48 30.32.54 2.33.19 4.47 1.34 5.93 3.16 1.48 1.83 2.12 4.17 1.8 6.49zm-402.4 55.38c6.33-2.02 13.23-4.07 20.64-6.05 35.14-9.39 88.56-18.89 143.49-10.78 3.42.5 6.19 3.03 7.01 6.38.31 1.24 3.61 14.78 6.98 32.06 3.39-1.25 7.39-2.23 11.8-2.4-3.06-17.24-4.83-30.97-4.99-32.23-.44-3.42 1.24-6.77 4.25-8.47 48.32-27.35 101.58-37.73 137.75-41.62 8.01-.86 15.52-1.45 22.43-1.85l-8.15-78.24c-23.03.21-102.08 2.08-183.92 17.32-81.89 15.25-156.27 41.97-177.82 50.06zm220.81 72.72c15.98 1.78 74.28 5.69 140.66-21.34l-10.35-99.33c-38.2 2.15-96.33 10.45-148.55 38.48 1.06 7.47 3.17 21.39 6.04 36.26.19.6.31 1.22.36 1.86 3.18 16.13 7.23 33.11 11.84 44.07zm-190.14 40.49c71.12 1.06 123.66-23.37 137.87-30.75.35-12.03-2.04-29.62-4.94-45.98 0-.02-.01-.03-.01-.05-2.72-15.37-5.89-29.66-7.63-37.21-58.37-7.3-115.07 5.59-151.49 17.26zm-19.69-15.31-20.75-76.59c-7.41 2.67-13.46 5.08-17.85 6.92zm352.32-28.94c-46.69 18.25-88.76 22.19-116.34 22.19-19.77 0-32.09-2.02-33.34-2.24-2.64-.45-4.91-2.12-6.13-4.51-5.68-11.13-10.55-29.94-14.3-48.1-4.85-.51-9.1.97-11.97 2.43 3.03 18.23 5.24 37.44 3.95 49.82-.28 2.67-1.8 5.04-4.1 6.42-2.6 1.55-60.15 35.29-145.45 35.29-.11 0-.22 0-.34 0l1.31 4.83c1.98 7.33 8.23 12.42 15.53 12.66 22.89.77 73.25-.16 153.32-15.07 80.06-14.91 127.38-32.18 148.46-41.14 6.73-2.86 10.72-9.86 9.93-17.41zm20.98-117.45c-4.56-.13-10.72-.2-18.14-.04l7.79 74.79z"
					fill={color}
				/>
			</svg>
		</LogoUI>
	);
}

const LogoUI = styled('div')`
	svg {
		display: block;
		width: 100%;
	}
`;

export default Logo;
