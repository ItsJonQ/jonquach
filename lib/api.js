import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import stripHtml from 'string-strip-html';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

function getPostExcerpt(excerpt) {
	if (!excerpt) return undefined;
	const parsed = md.render(excerpt);

	return stripHtml(parsed).result;
}

const postsDirectory = join(process.cwd(), '_posts');
const pagesDirectory = join(process.cwd(), '_pages');

export function getPostSlugs() {
	return fs.readdirSync(postsDirectory);
}

export function getPageSlugs() {
	return fs.readdirSync(pagesDirectory);
}

export function getPostBySlug(slug, fields = []) {
	const realSlug = slug.replace(/\.md$/, '');
	const fullPath = join(postsDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const { data, content, excerpt } = matter(fileContents, {
		excerpt: true,
		excerpt_separator: '<!-- more -->',
		sections: true,
	});

	const items = {
		description: data.description || getPostExcerpt(excerpt),
	};

	// Ensure only the minimal needed data is exposed
	fields.forEach((field) => {
		if (field === 'slug') {
			items[field] = realSlug;
		}

		if (field === 'content') {
			items[field] = content;
		}

		if (field === 'excerpt') {
			items[field] = getPostExcerpt(excerpt);
		}

		if (data[field]) {
			items[field] = data[field];
		}
	});

	return items;
}

export function getPageBySlug(slug, fields = []) {
	const realSlug = slug.replace(/\.md$/, '');
	const fullPath = join(pagesDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const { data, content, excerpt } = matter(fileContents, {
		excerpt: true,
		excerpt_separator: '<!-- more -->',
		sections: true,
	});

	const items = {
		description: data.description || getPostExcerpt(excerpt),
	};

	// Ensure only the minimal needed data is exposed
	fields.forEach((field) => {
		if (field === 'slug') {
			items[field] = realSlug;
		}

		if (field === 'content') {
			items[field] = content;
		}

		if (field === 'excerpt') {
			items[field] = getPostExcerpt(excerpt);
		}

		if (data[field]) {
			items[field] = data[field];
		}
	});

	return items;
}

export function getAllPosts(fields = []) {
	const slugs = getPostSlugs();
	const posts = slugs
		.map((slug) => getPostBySlug(slug, fields))
		// sort posts by date in descending order
		.sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'));
	return posts;
}

export function getAllPages(fields = []) {
	const slugs = getPageSlugs();
	const posts = slugs
		.map((slug) => getPageBySlug(slug, fields))
		// sort posts by date in descending order
		.sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'));
	return posts;
}
