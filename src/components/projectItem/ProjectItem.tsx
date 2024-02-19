'use client'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'

import CenteredSection from '../layout/CenteredSection'
import PhotoModal from '../photoModal/PhotoModal'
import ProjectItemInfo from './ProjectItemInfo'
import Wrapper from '../layout/Wrapper'
import SectionBlock from '../UI/SectionBlock'

import { ProjectItemType } from '../../types/singleProjectType'

const ProjectItem: React.FC<ProjectItemType> = ({ title, description, stack, link, photo }) => {
	const [isClicked, setIsClicked] = useState(false)

	return (
		<Wrapper>
			<SectionBlock direction='right' />
			<CenteredSection classes='xl:flex-row xl:max-w-[1700px]'>
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
		</Wrapper>
	)
}

export default ProjectItem
