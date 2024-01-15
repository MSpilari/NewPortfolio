import { Dispatch, SetStateAction } from 'react'

export interface IAllInfo {
	image: string
	title: string
	githubLink: string
	projectLink: string
}

export interface IAllProjects {
	id: string
	title: string
	projectImage: string
}

export interface IAdminCard {
	id: string
	title: string
	projectImage: string
}

export interface IImageInput {
	allInfo: IAllInfo
	setAllInfo: Dispatch<SetStateAction<IAllInfo>>
}

export interface ITitleGitProjectInput {
	allInfo: IAllInfo
	setAllInfo: Dispatch<SetStateAction<IAllInfo>>
}
