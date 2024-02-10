import Link from 'next/link'
import StackList from '../StackList/StackList'

type ComponentType = {
	description: string
	stack: { name: string; icon: any }[]
	link: string
	title: string
}

const ProjectItemInfo: React.FC<ComponentType> = ({ title, description, stack, link }) => {
	return (
		<div className='w-full xl:w-1/2 text-center md:pt-10 xl:px-16'>
			<h2 className='text-3xl xl:text-4xl mb-4 text-hightlight'>{title}</h2>
			<p className='text-lg'>{description}</p>
			<StackList
				stack={stack}
				classes='grid grid-cols-2 md:grid-cols-3 items-center my-6 md:mt-10 mb-12 gap-6 xl:grid-cols-4'
			/>
			<Link
				href={`projects/${link}`}
				className='bg-hightlight hover:bg-hightlightHover rounded-xl duration-300 py-3 px-10 xl:px-20 text-lg'>
				More info
			</Link>
		</div>
	)
}

export default ProjectItemInfo
