import PageMeta from "./page-meta";
import NavBar from "./nav/nav-bar";
import Head from "next/head";
import SiteContainer from "./layout/site-container";
import Footer from "./layout/footer";

export default function Layout({ children }) {
	return (
		<>
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
		</>
	);
}
