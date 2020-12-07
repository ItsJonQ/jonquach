import Category from "../meta/category";
import TopCaption from "../meta/top-caption";
import PostHeader from "./header";
import PostMeta from "./meta";

export default function PostIntro({
	topCaption,
	date,
	category,
	title = "Title",
	size = "default",
}) {
	return (
		<>
			<TopCaption>{topCaption}</TopCaption>
			<Category>{category}</Category>
			<PostHeader size={size} title={title} />
			<PostMeta date={date} />
		</>
	);
}
