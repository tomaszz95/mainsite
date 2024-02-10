'use client'
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import CenteredSection from '../layout/CenteredSection'
import { createPortal } from 'react-dom'
import PhotoModal from '../UI/PhotoModal'

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
		<CenteredSection classes='flex flex-col xl:flex-row w-full gap-6 items-center xl:items-stretch xl:justify-center mt-6 flex-wrap'>
			{photos.map(photo => (
				<Image
					src={photo.photo}
					alt={photo.alt}
					key={photo.alt}
					priority
					className='w-full xl:w-2/5 cursor-pointer border-transparent border-4 hover:border-4 hover:border-hightlight duration-300 rounded-2xl'
					onClick={handleClick}
				/>
			))}
			{isClicked &&
				chosenPhoto &&
				createPortal(
					<PhotoModal photo={chosenPhoto.photo} alt={chosenPhoto.alt} onCloseHandler={() => setIsClicked(false)} />,
					document.body
				)}
		</CenteredSection>
	)
}

export default SingleProjectImages
