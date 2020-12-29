import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import stripHtml from "string-strip-html";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

const POSTS_DIR = "_posts";
const PAGES_DIR = "_pages";
const PROJECTS_DIR = "_projects";

function getPostExcerpt(excerpt) {
	if (!excerpt) return undefined;
	const parsed = md.render(excerpt);

	return stripHtml(parsed).result;
}

export function getSlugsFromDir(directory = POSTS_DIR) {
	const dirName = join(process.cwd(), directory);
	return fs.readdirSync(dirName);
}

export function getPostSlugs() {
	return fs.readdirSync(postsDirectory);
}

export function getPageSlugs() {
	return fs.readdirSync(pagesDirectory);
}

export function getProjectSlugs() {
	return fs.readdirSync(projectsDirectory);
}

export function getPostFileBySlugFromDir(
	directory = POSTS_DIR,
	slug,
	fields = [],
) {
	const postFilesDirectory = join(process.cwd(), directory);

	const realSlug = slug.replace(/\.md$/, "");
	const fullPath = join(postFilesDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content, excerpt } = matter(fileContents, {
		excerpt: true,
		excerpt_separator: "<!-- more -->",
		sections: true,
	});

	const props = {
		description: data.description || getPostExcerpt(excerpt),
	};

	// Ensure only the minimal needed data is exposed
	fields.forEach((field) => {
		if (field === "slug") {
			props[field] = realSlug;
		}

		if (field === "content") {
			props[field] = content;
		}

		if (field === "excerpt") {
			props[field] = getPostExcerpt(excerpt);
		}

		if (data[field]) {
			props[field] = data[field];
		}
	});

	return props;
}

export function getAllPostsFromDir(dir = POSTS_DIR, fields = []) {
	const slugs = getSlugsFromDir(dir);
	const posts = slugs
		.map((slug) => getPostFileBySlugFromDir(dir, slug, fields))
		// sort posts by date in descending order
		.sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"));
	return posts;
}

export function getPostBySlug(slug, fields = []) {
	return getPostFileBySlugFromDir(POSTS_DIR, slug, fields);
}

export function getPageBySlug(slug, fields = []) {
	return getPostFileBySlugFromDir(PAGES_DIR, slug, fields);
}

export function getProjectBySlug(slug, fields = []) {
	return getPostFileBySlugFromDir(PROJECTS_DIR, slug, fields);
}

export function getAllPosts(fields = []) {
	return getAllPostsFromDir(POSTS_DIR, fields);
}

export function getAllPages(fields = []) {
	return getAllPostsFromDir(PAGES_DIR, fields);
}

export function getAllProjects(fields = []) {
	return getAllPostsFromDir(PROJECTS_DIR, fields);
}
