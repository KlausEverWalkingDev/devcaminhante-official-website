import IndexModel from '../../interfaces/index.model'
import PostModel from '../../interfaces/post.model'
import { getAllPosts, getAuthorBySlug, getPostBySlug } from '../../lib/api'

import Image from 'next/image'
import Link from 'next/link'

export default function Post({ post }: IndexModel) {
	const prettyDate = new Date(post.date).toLocaleString('en-US', {
		month: 'short',
		day: '2-digit',
		year: 'numeric'
	})

	return (
			<div className="post">
				<h1>{post.title}</h1>

				<time dateTime={post.date}>{prettyDate}</time>

				<div className="author">
					<Image alt={post.author.name} src={post.author.profilePictureUrl} height="40" width="40" />

					<Link href={post.author.permalink}>
						<a>{post.author.name}</a>
					</Link>
				</div>

				<div dangerouslySetInnerHTML={{ __html: post.body }} />
			</div>
	)
}

export function getStaticProps({ params }) {
	const post: PostModel = getPostBySlug(params.slug)

	return {
		props: {
			post: { ...post, author: getAuthorBySlug(post.author) }
		}
	}
}

export function getStaticPaths() {
	return {
		fallback: false,
		paths: getAllPosts().map(post => ({
			params: {
				slug: post.slug
			}
		}))
	}
}
