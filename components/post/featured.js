import { styled } from "@wp-g2/styles";
import Category from "../meta/category";
import SectionMetaTitle from "../meta/section-meta-title";
import PostHeader from "./header";
import PostMeta from "./meta";
import PostLead from "./lead";
import Link from "next/link";

function PostFeatured({ category, date, excerpt, url = "/", title = "Title" }) {
	return (
		<Link href={url} passHref>
			<LinkUI>
				<MetaTitleUI>Latest Post</MetaTitleUI>
				<Category>{category}</Category>
				<TitleUI date={date}>
					<span>{title}</span>
				</TitleUI>
				{excerpt && <PostLead>{excerpt}</PostLead>}
			</LinkUI>
		</Link>
	);
}

const TitleUI = styled(PostHeader)`
	color: var(--brandColor);

	*:hover > * {
		span {
			background: rgba(var(--brandColorRGB), 0.1);
		}
	}
`;

const LinkUI = styled("a")`
	color: var(--fontColor);
	display: block;

	&:hover {
		background: none;
	}
`;

const PostMetaUI = styled(PostMeta)`
	margin: 15px 0;
`;

const MetaTitleUI = styled(SectionMetaTitle)`
	margin-bottom: 20px;
	margin-top: 50px;
`;

export default PostFeatured;
