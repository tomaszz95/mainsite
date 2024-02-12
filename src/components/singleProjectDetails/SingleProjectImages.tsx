'use client'
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import PhotoModal from '../photoModal/PhotoModal'

type ComponentType = {
	photos: {
		photo: StaticImageData
		alt: string
	}[]
}

const SingleProjectImages: React.FC<ComponentType> = ({ photos }) => {
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
		<div className='flex flex-col gap-8 mb-6'>
			{photos.map(photo => (
				<Image
					src={photo.photo}
					alt={photo.alt}
					key={photo.alt}
					priority
					className='w-full max-w-[600px] cursor-pointer border-transparent border-4 hover:border-4 hover:border-hightlight duration-300 rounded-2xl'
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
