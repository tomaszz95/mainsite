import { StaticImageData } from 'next/image'

export type SingleProjectIconType = {
	name: string
	icon: StaticImageData
}

export type SingleProjectPhotoType = {
	photo: StaticImageData
	alt: string
}

export type SingleProjectType = {
	title: string
	shortDesc: string
	description: string
	technologies: SingleProjectIconType[]
	link: string
	photos: SingleProjectPhotoType[]
	github: string
	live: string
	contents: string[]
}

export type ProjectItemType = {
	title: string
	description: string
	stack: SingleProjectIconType[]
	link: string
	photo: SingleProjectPhotoType
}

export type WordpressProjectType = {
	title: string
	shortDesc: string
	description: string
	live: string
	photos: SingleProjectPhotoType[]
}
