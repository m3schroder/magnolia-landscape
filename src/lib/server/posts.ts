// src/lib/server/posts.ts
import { parse } from 'path';

export type Post = {
	slug: string;
	title: string;
	desc: string;
	isPublished: boolean;
	publishedOn: string;
	updatedOn: string;
};

const modules = import.meta.glob('/src/static/posts/**/*.svx', { eager: true })

export const posts: Post[] = Object.entries(modules).map(([filepath, module]) => {
	const { metadata } = module;
	const { html } = module.default.render();
	return {
		html,
		slug: parse(filepath).name,
		...metadata,
	};
});