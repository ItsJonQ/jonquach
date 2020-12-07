import PageMeta from './page-meta';
import NavBar from './nav/nav-bar';
import Head from 'next/head';
import SiteContainer from './layout/site-container';
import Footer from './layout/footer';
import { ThemeProvider, createTheme } from '@wp-g2/styles';

const theme = createTheme(({ theme, get }) => {
	return {
		...theme,
		fontSize: '18px',
		fontFamily:
			'-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Roboto Light","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
		colorAdmin: '#05f05f',
	};
});

export default function Layout({ children }) {
	return (
		<ThemeProvider isGlobal theme={theme}>
			<PageMeta />
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
			</Head>
			<NavBar />
			<SiteContainer>
				<main>{children}</main>
				<Footer />
			</SiteContainer>
		</ThemeProvider>
	);
}
