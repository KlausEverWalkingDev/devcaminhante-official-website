import AuthorModel from '../../interfaces/author.model'
import { getAllAuthors, getAllPosts } from '../../lib/api'

import Image from 'next/image'
import Link from 'next/link'

export default function Authors({ authors }) {
	return (
			<div className="authors">
				<h1>Autores</h1>

				{authors.map(function (author: AuthorModel) {
					return (
							<div key={author.slug}>
								<hr />
								<h2>
									<Link href={author.permalink}>
										<a>{author.name}</a>
									</Link>
								</h2>

								<Image alt={author.name} src={author.profilePictureUrl} height="40" width="40" />

								<p>{author.posts.length} post(s)</p>
							</div>
					)
				})}
			</div>
	)
}

export function getStaticProps() {
	return {
		props: {
			authors: getAllAuthors().map(author => ({
				...author, posts: getAllPosts().filter(post => post["author"] === author.slug)
			}))
		}
	}
}
