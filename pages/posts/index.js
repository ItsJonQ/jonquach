import Layout from '../../components/page-layout';
import PostFeatured from '../../components/post/featured';
import PostSnippet from '../../components/post/snippet';
import TopCaption from '../../components/meta/top-caption';
import SEO from '../../components/seo';
import Section from '../../components/layout/section';
import { getAllPosts } from '../../lib/api';

export default function Index({ allPosts }) {
	const featuredPost = allPosts[0];
	const morePosts = allPosts.slice(1);

	featuredPost.as = `/posts/${featuredPost.slug}`;
	featuredPost.href = `/posts/[slug]`;

	return (
		<Layout>
			<SEO title="Writing" />
			<Section>
				<TopCaption>
					Scribbles...{' '}
					<span aria-label="Writing emoji" role="img">
						✍️
					</span>
				</TopCaption>
				{featuredPost && <PostFeatured {...featuredPost} />}
			</Section>
			{morePosts.map((post) => (
				<PostSnippet key={post.slug} {...post} />
			))}
		</Layout>
	);
}

export async function getStaticProps() {
	const allPosts = getAllPosts([
		'title',
		'date',
		'slug',
		'excerpt',
		'category',
	]);

	return {
		props: { allPosts },
	};
}
