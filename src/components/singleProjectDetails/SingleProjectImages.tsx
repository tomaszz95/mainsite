'use client'

import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'

import { createPortal } from 'react-dom'

import PhotoModal from '../photoModal/PhotoModal'

type ComponentType = {
	photos: {
		photo: StaticImageData
		alt: string
	}[]
	fullSize?: boolean
}

const SingleProjectImages: React.FC<ComponentType> = ({ photos, fullSize }) => {
	const [isClicked, setIsClicked] = useState(false)
	const [chosenPhoto, setChosenPhoto] = useState<{
		photo: StaticImageData
		alt: string
	} | null>(null)

	const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
		const clickedAlt = e.currentTarget.alt
		const clickedPhoto = photos.find(photo => photo.alt === clickedAlt)

		if (clickedPhoto) {
			setChosenPhoto(clickedPhoto)
			setIsClicked(true)
		}
	}

	return (
		<div
			className={`${
				fullSize ? 'hidden flex-row my-0 max-w-[1600px]' : 'flex flex-col my-8'
			} xl:flex gap-8 justify-center`}>
			{photos.map(photo => (
				<Image
					src={photo.photo}
					alt={photo.alt}
					key={photo.alt}
					priority
					className={`w-full max-w-[600px] 2xl:max-w-[645px] cursor-pointer border-transparent border-4 hover:border-4 hover:border-hightlight duration-300 rounded-2xl lg:mt-8 ${
						fullSize ? 'mb-32' : ''
					}`}
					onClick={handleClick}
				/>
			))}
			{isClicked &&
				chosenPhoto &&
				createPortal(
					<PhotoModal photo={chosenPhoto.photo} alt={chosenPhoto.alt} onCloseHandler={() => setIsClicked(false)} />,
					document.body
				)}
		</div>
	)
}

export default SingleProjectImages
