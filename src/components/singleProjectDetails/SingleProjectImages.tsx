'use client'
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import CenteredSection from '../layout/CenteredSection'
import { createPortal } from 'react-dom'
import PhotoModal from '../UI/PhotoModal'
import SectionBlock from '../UI/SectionBlock'

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
		<div className='w-full flex flex-col items-center relative overflow-hidden'>
			<SectionBlock direction='right' />
			<h2 className='text-3xl xl:text-4xl mt-16'>
				Some <span className='text-hightlight'>photos</span>
			</h2>
			<CenteredSection classes='flex flex-col xl:flex-row w-full gap-6 items-center xl:items-stretch xl:justify-center mt-6 pb-20 flex-wrap'>
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
			<SectionBlock direction='left' />
		</div>
	)
}

export default SingleProjectImages
