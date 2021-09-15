import IndexModel from '../../interfaces/index.model'
import { getAllAuthors, getAllPosts, getAuthorBySlug } from '../../lib/api'

import Image from 'next/image'
import Link from 'next/link'
import PostModel from '../../interfaces/post.model'

export default function Author({ author }: IndexModel) {
	return (
			<div className="profile">
				<h1>{author.name}</h1>

				<Image alt={author.name} src={author.profilePictureUrl} height="80" width="80" />

				<h2>Posts</h2>

				<ul>
					{author.posts.map(function (post: PostModel) {
						return (
								<li>
									<Link href={post.permalink}>
										<a>{post.title}</a>
									</Link>
								</li>
						)
					})}
				</ul>
			</div>
	)
}

export function getStaticProps({ params }) {
	const author: PostModel = getAuthorBySlug(params.slug)

	return {
		props: {
			author: { ...author, posts: getAllPosts().filter(post => post["author"] === author.slug) }
		}
	}
}

export function getStaticPaths() {
	return {
		fallback: false,
		paths: getAllAuthors().map(author => ({
			params: {
				slug: author.slug
			}
		}))
	}
}
