'use client'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import Link from 'next/link'
import CenteredSection from '../layout/CenteredSection'
import PhotoModal from '../UI/PhotoModal'

type ComponentType = {
	title: string
	description: string
	stack: { name: string; icon: any }[]
	link: string
	photo: any
}

const ProjectItem: React.FC<ComponentType> = ({ title, description, stack, link, photo }) => {
	const [isClicked, setIsClicked] = useState(false)

	return (
		<CenteredSection classes='flex flex-col xl:flex-row items-center odd:evenSection lg:mt-0'>
			<div className='w-full xl:w-1/2 text-center md:pt-10 xl:px-16'>
				<h2 className='text-3xl xl:text-4xl mb-4 text-hightlight'>{title}</h2>
				<p className='text-lg'>{description}</p>
				<ul className='grid grid-cols-2 md:grid-cols-3 items-center my-6 md:mt-10 mb-12 gap-6 xl:grid-cols-4'>
					{stack.map(item => (
						<li className='flex flex-col items-center gap-2' key={`${item.name}${title}`}>
							<Image src={item.icon} alt={`${item.name} icon`} width={64} />
							<span>{item.name}</span>
						</li>
					))}
				</ul>
				<Link
					href={`projects/${link}`}
					className='bg-hightlight hover:bg-hightlightHover rounded-xl duration-300 py-3 px-10 xl:px-20 text-lg'>
					More info
				</Link>
			</div>
			<Image
				src={photo}
				alt={`${title} photo`}
				priority
				className='hidden sm:block w-full xl:w-1/2 mt-12 xl:my-10 cursor-pointer border-transparent border-4 hover:border-4 hover:border-hightlight duration-300'
				onClick={() => setIsClicked(true)}
			/>
			{isClicked &&
				createPortal(
					<PhotoModal title={title} photo={photo} onCloseHandler={() => setIsClicked(false)} />,
					document.body
				)}
		</CenteredSection>
	)
}

export default ProjectItem
