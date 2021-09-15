import fs from 'fs'
import html from 'remark-html'
import matter from 'gray-matter'
import path from 'path'
import remark from 'remark'

export function getAllPosts() {
	const postsDirectory = path.join(process.cwd(), '_articles/blog')
	const filenames = fs.readdirSync(postsDirectory)

	return filenames.map(function (filename) {
		const file = fs.readFileSync(path.join(process.cwd(), '_articles/blog', filename), 'utf8')
		const { data } = matter(file)
		const slug = filename.replace(/\.md$/, '')

		return { ...data, slug, permalink: `/posts/${slug}` }
	})
}

export function getPostBySlug(slug) {
	const file = fs.readFileSync(path.join(process.cwd(), '_articles/blog', `${slug}.md`), 'utf8')
	const { content, data } = matter(file)

	const body = remark().use(html).processSync(content).toString()

	return { ...data, body, slug }
}

export function getAllAuthors() {
	const authorsDirectory = path.join(process.cwd(), '_authors')
	const filenames = fs.readdirSync(authorsDirectory)

	return filenames.map(function (filename) {
		const file = fs.readFileSync(path.join(process.cwd(), '_authors', filename), 'utf8')
		const data = JSON.parse(file)
		const slug = filename.replace(/\.json/, '')

		return { ...data, slug, permalink: `/autores/${slug}`, profilePictureUrl: `/images/authors/${slug}.jpg` }
	})
}

export function getAuthorBySlug(slug) {
	const file = fs.readFileSync(path.join(process.cwd(), '_authors', `${slug}.json`), 'utf8')
	const data = JSON.parse(file)

	return { ...data, slug, permalink: `/autores/${slug}`, profilePictureUrl: `/images/authors/${slug}.jpg` }
}
