import StackList from '../stackList/StackList'

import HeadingTwo from '../UI/HeadingTwo'
import LinkButton from '../UI/LinkButton'

import { SingleProjectIconType } from '../../types/singleProjectType'

type ComponentType = {
	description: string
	stack: SingleProjectIconType[]
	link: string
	title: string
}

const ProjectItemInfo: React.FC<ComponentType> = ({ title, description, stack, link }) => {
	return (
		<div className='w-full xl:w-1/2 text-center md:pb-8 xl:px-12'>
			<HeadingTwo text='' coloredText={title} />
			<p className='text-lg'>{description}</p>
			<StackList stack={stack} classes='pt-8 mb-12 sm:grid-cols-3 md:grid-cols-4' />
			<LinkButton href={`projects/${link}`} openNewWindow={false}>
				More info
			</LinkButton>
		</div>
	)
}

export default ProjectItemInfo
