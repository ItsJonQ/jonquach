import { styled } from "@wp-g2/styles";
import NextImage from "next/image";
import {
	HStack,
	FlexBlock,
	Image,
	View,
	ViewportPhablet,
	VisuallyHidden,
} from "@wp-g2/components";
import Link from "next/link";
import Category from "../meta/category";
import Date from "../meta/date";

function FeaturedImage({ slug, featuredImage, title }) {
	if (!featuredImage) return null;

	return (
		<View css={{ width: [150, 175, 200] }}>
			<Link as={`/posts/${slug}`} href="/posts/[slug]" passHref>
				<LinkUI>
					<Image
						aspectRatio={16 / 9}
						src={featuredImage}
						as={NextImage}
						layout="fill"
						alt={title}
					/>
					<VisuallyHidden>{title}</VisuallyHidden>
				</LinkUI>
			</Link>
		</View>
	);
}

export default function PostSnippet({
	titleAs,
	title,
	featuredImage,
	category,
	date,
	excerpt,
	slug,
}) {
	return (
		<ArticleUI>
			<HStack alignment="top">
				<FlexBlock>
					<Link as={`/posts/${slug}`} href="/posts/[slug]" passHref>
						<LinkUI>
							<Category>{category}</Category>
							<TitleUI as={titleAs}>
								<span>{title}</span>
							</TitleUI>
						</LinkUI>
					</Link>
					<ViewportPhablet>
						<ExcerptUI dangerouslySetInnerHTML={{ __html: excerpt }} />
					</ViewportPhablet>
					{date && <Date date={date} />}
				</FlexBlock>
				<FeaturedImage
					slug={slug}
					featuredImage={featuredImage}
					title={title}
				/>
			</HStack>
		</ArticleUI>
	);
}

const LinkUI = styled("a")`
	color: var(--fontColor);
	display: block;

	&:hover {
		background: none;
	}
`;

const ExcerptUI = styled("p")`
	font-size: 0.9em;
	transition: opacity 200ms ease;
	line-height: 1.5;
	opacity: 0.5;
`;

const TitleUI = styled("h2")`
	color: black;
	font-size: 1.2rem;
	transition: color 200ms ease;
	margin-bottom: 5px;
	font-weight: 700;

	*:hover > & {
		color: var(--brandColor);
		span {
			background: rgba(var(--brandColorRGB), 0.1);
		}
	}
`;

const ArticleUI = styled("article")`
	padding: 1.2em 0;
`;
