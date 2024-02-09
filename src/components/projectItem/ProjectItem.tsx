import Image from 'next/image'
import Link from 'next/link'
import CenteredSection from '../layout/CenteredSection'

type ComponentType = {
	title: string
	description: string
	stack: { name: string; icon: any }[]
	link: string
	photo: any
}

const ProjectItem: React.FC<ComponentType> = ({ title, description, stack, link, photo }) => {
	return (
		<CenteredSection classes='flex flex-col lg:flex-row items-center odd:evenSection'>
			<div className='w-full lg:w-1/2 text-center'>
				<h2 className='text-3xl xl:text-4xl mb-4 text-hightlight'>{title}</h2>
				<p className='text-lg'>{description}</p>
				<ul className='grid grid-cols-2 items-center mt-6 gap-6'>
					{stack.map(item => (
						<li className='flex flex-col items-center gap-2'>
							<Image src={item.icon} alt={`${item.name} icon`} />
							<span>{item.name}</span>
						</li>
					))}
				</ul>
				<Link href={`projects/${link}`}>More info</Link>
			</div>
			<Image src={photo} alt={`${title} photo`} priority className='w-full lg:w-1/2' />
		</CenteredSection>
	)
}

export default ProjectItem
