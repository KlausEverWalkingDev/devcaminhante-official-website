import AuthorModel from './author.model'

export default interface PostModel {
	title?: string
	date?: string
	permalink?: string
	slug?: string
	author?: AuthorModel
	body?: string
}
