import styled from "@emotion/styled";
import NextImage from "next/image";
import {
	AspectRatio,
	HStack,
	Image,
	Spacer,
	VisuallyHidden,
} from "@components/base";
import Link from "next/link";
import Category from "../meta/category";
import Date from "../meta/date";

const FeaturedImageWrapperView = styled("div")`
	width: 150px;
	@media (min-width: 40em) {
		width: 175px;
	}
	@media (min-width: 52em) {
		width: 200px;
	}
`;

const ViewportPhabletView = styled("div")`
	display: none;
	@media (min-width: 36em) {
		display: block;
	}
}`;

function FeaturedImage({ slug, featuredImage, title }) {
	if (!featuredImage) return null;

	return (
		<FeaturedImageWrapperView>
			<Link as={`/posts/${slug}`} href="/posts/[slug]" passHref>
				<LinkUI>
					<AspectRatio ratio={16 / 9}>
						<Image
							src={featuredImage}
							as={NextImage}
							layout="fill"
							alt={title}
						/>
					</AspectRatio>
					<VisuallyHidden>{title}</VisuallyHidden>
				</LinkUI>
			</Link>
		</FeaturedImageWrapperView>
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
				<Spacer>
					<Link as={`/posts/${slug}`} href="/posts/[slug]" passHref>
						<LinkUI>
							<Category>{category}</Category>
							<TitleUI as={titleAs}>
								<span>{title}</span>
							</TitleUI>
						</LinkUI>
					</Link>
					<ViewportPhabletView>
						<ExcerptUI dangerouslySetInnerHTML={{ __html: excerpt }} />
					</ViewportPhabletView>
					{date && <Date date={date} />}
				</Spacer>
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
