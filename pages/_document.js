import Document, { Html, Head, Main, NextScript } from "next/document";
import createEmotionServer from "create-emotion-server";
import { cache } from "@wp-g2/styles";

const { extractCritical } = createEmotionServer(cache);

function GoogleAnalyticsScript() {
	return (
		<>
			<script
				async
				src="https://www.googletagmanager.com/gtag/js?id=UA-50367408-1"
			/>
			<script
				dangerouslySetInnerHTML={{
					__html: `
		<!-- Global site tag (gtag.js) - Google Analytics -->
		  window.dataLayer = window.dataLayer || [];
		  function gtag(){dataLayer.push(arguments);}
		  gtag('js', new Date());

		  gtag('config', 'UA-50367408-1');
		`,
				}}
			/>
		</>
	);
}

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		const styles = extractCritical(initialProps.html);

		return {
			...initialProps,
			styles: (
				<>
					{initialProps.styles}
					<style
						data-emotion-css={styles.ids.join(" ")}
						dangerouslySetInnerHTML={{ __html: styles.css }}
					/>
				</>
			),
		};
	}

	render() {
		return (
			<Html>
				<Head>
					<GoogleAnalyticsScript />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
