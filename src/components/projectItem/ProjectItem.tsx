'use client'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import Image, { StaticImageData } from 'next/image'
import CenteredSection from '../layout/CenteredSection'
import PhotoModal from '../UI/PhotoModal'
import ProjectItemInfo from './ProjectItemInfo'
import SectionBlock from '../UI/SectionBlock'

type ComponentType = {
	title: string
	description: string
	stack: { name: string; icon: any }[]
	link: string
	photo: { photo: StaticImageData; alt: string }
}

const ProjectItem: React.FC<ComponentType> = ({ title, description, stack, link, photo }) => {
	const [isClicked, setIsClicked] = useState(false)

	return (
		<div className='w-full relative flex flex-col items-center overflow-hidden'>
			<SectionBlock direction='right' />
			<CenteredSection classes='flex flex-col xl:flex-row items-center odd:evenSection md:pb-16 md:pt-0'>
				<ProjectItemInfo description={description} stack={stack} link={link} title={title} />
				<Image
					src={photo.photo}
					alt={photo.alt}
					priority
					className='hidden sm:block w-full xl:w-1/2 mt-12 xl:my-10 cursor-pointer border-transparent border-4 hover:border-4 hover:border-hightlight duration-300 rounded-2xl projectPhoto'
					onClick={() => setIsClicked(true)}
				/>
				{isClicked &&
					createPortal(
						<PhotoModal photo={photo.photo} alt={photo.alt} onCloseHandler={() => setIsClicked(false)} />,
						document.body
					)}
			</CenteredSection>
			<SectionBlock direction='left' />
		</div>
	)
}

export default ProjectItem
