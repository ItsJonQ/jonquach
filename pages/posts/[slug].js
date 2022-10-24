import { useRouter } from "next/router";
import ErrorPage from "next/error";
import styled from "@emotion/styled";
import renderToString from "next-mdx-remote/render-to-string";
import { components } from "@components/mdx";
import PostBody from "@components/post/body";
import PostIntro from "@components/post/intro";
import PostFeaturedImage from "@components/post/featured-image";
import Layout from "@components/page-layout";
import Section from "@components/layout/section";
import SEO from "@components/seo";
import { getPostBySlug, getAllPosts } from "@lib/api";

export default function Post({ post, preview }) {
	const router = useRouter();
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}

	return (
		<Layout preview={preview}>
			{router.isFallback ? (
				<div>Loading…</div>
			) : (
				<>
					<article>
						<SEO
							title={post.title}
							image={post.image}
							description={post.description}
						/>
						<Section>
							<PostIntro {...post} />
						</Section>
						<PostContentUI>
							{post.featuredImage && (
								<PostFeaturedImage src={post.featuredImage} />
							)}
							<PostBody content={post.content} />
						</PostContentUI>
					</article>
				</>
			)}
		</Layout>
	);
}

const PostContentUI = styled("div")`
	margin: 20px auto;
`;

export async function getStaticProps({ params }) {
	const post = getPostBySlug(params.slug, [
		"title",
		"date",
		"slug",
		"category",
		"topCaption",
		"content",
		"image",
		"featuredImage",
	]);

	const { renderedOutput } = await renderToString(post.content || "", {
		components,
	});

	return {
		props: {
			post: {
				...post,
				content: renderedOutput,
			},
		},
	};
}

export async function getStaticPaths() {
	const posts = getAllPosts(["slug"]);

	return {
		paths: posts.map((post) => {
			return {
				params: {
					slug: post.slug,
				},
			};
		}),
		fallback: false,
	};
}
