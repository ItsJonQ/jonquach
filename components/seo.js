import Head from "next/head";
import { useRouter } from "next/router";

const baseUrl = "https://jonquach.com";
const defaultDescription = `I'm Q! A designer + developer. I specialize in Design Systems, UI, animations, and interactions.`;

export default function SEO({
	title,
	image = "/images/q-meta.png",
	description = defaultDescription,
}) {
	const siteTitle = title ? `${title} | Q` : "Q";
	const router = useRouter();

	const url = `${baseUrl}${router.asPath}`;

	return (
		<Head>
			<title>{siteTitle}</title>
			<meta name="title" content={siteTitle} />
			<meta name="description" content={description} />

			<meta property="og:type" content="website" />
			<meta property="og:url" content={url} />
			<meta property="og:title" content={siteTitle} />
			<meta property="og:description" content={description} />
			{image && <meta property="og:image" content={image} />}

			<meta property="twitter:creator" content="@itsjonq" />
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={url} />
			<meta property="twitter:title" content={siteTitle} />
			<meta property="twitter:description" content={description} />

			{image && <meta property="twitter:image" content={image} />}
		</Head>
	);
}
