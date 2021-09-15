import AuthorModel from './author.model'
import PostModel from './post.model'

export default interface IndexModel {
	author: AuthorModel,
	post: PostModel
}
