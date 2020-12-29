import { styled } from "@wp-g2/styles";
import Link from "next/link";
import Hr from "../components/base/hr";
import SEO from "../components/seo";
import Layout from "../components/page-layout";
import PostIntro from "../components/post/intro";
import PostLead from "../components/post/lead";
import PostSnippet from "../components/post/snippet";
import SectionMetaTitle from "../components/meta/section-meta-title";
import Section from "../components/layout/section";
import { getAllPosts } from "../lib/api";
import { chunk } from "lodash";

export default function Index({ allPosts = [] }) {
	const [posts] = chunk(allPosts, 5);

	return (
		<>
			<Layout>
				<SEO title="Hello" />
				<Section>
					<PostIntroWrapperUI>
						<PostIntro
							topCaption="Hello 👋"
							title={
								<SecondaryTextUI>
									I'm Q!
									<br />
									<span>Designer</span>.<br />
									<span>Developer</span>.
								</SecondaryTextUI>
							}
						/>
						<SelfieUI src="/assets/home/q-sketch-cropped.jpg" alt="Selfie!" />
					</PostIntroWrapperUI>
				</Section>
				<LeadUI>
					I specialize in <strong>Design Systems</strong>, <strong>UI</strong>,{" "}
					<strong>animations</strong>, and <strong>interactions</strong>.<br />
					<br />
					I'm a Principal Designer at{" "}
					<a href="https://www.automattic.com/">Automattic</a>.
				</LeadUI>
				{!!posts.length && (
					<>
						<Hr />
						<SectionMetaTitle>Writing</SectionMetaTitle>
						{posts.map((post) => (
							<PostSnippet key={post.slug} {...post} />
						))}
						<Section>
							<Link href="/posts" passHref>
								<a>See More</a>
							</Link>
						</Section>
					</>
				)}
			</Layout>
		</>
	);
}

const PostIntroWrapperUI = styled.div`
	position: relative;
`;

const SelfieUI = styled.img`
	opacity: 0.16;
	pointer-events: none;
	position: absolute;
	right: 0px;
	top: 0;
	transition: all 200ms linear;
	user-select: none;
	width: 200px;
	z-index: -1;

	@media (min-width: 520px) {
		opacity: 1;
	}
`;

const SecondaryTextUI = styled("div")`
	font-size: 100%;
	font-weight: inherit;
	position: relative;
	z-index: 1;
`;

const LeadUI = styled(PostLead)`
	font-weight: 400;
	margin-bottom: 20px;
	margin-top: -20px;
	max-width: 65%;

	a {
		color: inherit;
	}
`;

export async function getStaticProps() {
	const allPosts = getAllPosts([
		"title",
		"date",
		"slug",
		"excerpt",
		"category",
		"featuredImage",
	]);

	return {
		props: { allPosts },
	};
}
