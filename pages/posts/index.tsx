import PostModel from '../../interfaces/post.model'
import { getAllPosts, getAuthorBySlug } from '../../lib/api'

import Image from 'next/image'
import Link from 'next/link'

export default function Posts({ posts }) {
	return (
			<div className="posts">
				<h1>Posts</h1>

				{posts.map(function (post: PostModel) {
					const prettyDate = new Date(post.date).toLocaleString('en-US', {
						month: 'short',
						day: '2-digit',
						year: 'numeric'
					})

					return (
							<article key={post.slug}>
								<hr />
								<h2>
									<Link href={post.permalink}>
										<a>{post.title}</a>
									</Link>
								</h2>

								<time dateTime={post.date}>{prettyDate}</time>

								<div className="author">
									<Image alt={post.author.name} src={post.author.profilePictureUrl} height="40" width="40" />

									<span>{post.author.name}</span>
								</div>
							</article>
					)

				})}
			</div>
	)
}

export function getStaticProps() {
	return {
		props: {
			posts: getAllPosts().map(post =>({ ...post, author: getAuthorBySlug(post["author"]) }))
		}
	}
}
