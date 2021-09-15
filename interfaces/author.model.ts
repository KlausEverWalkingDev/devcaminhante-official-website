import PostModel from './post.model'

export default interface AuthorModel {
	name?: string
	permalink?: string
	slug?: string
	posts?: [PostModel]
	profilePictureUrl?: string
}
