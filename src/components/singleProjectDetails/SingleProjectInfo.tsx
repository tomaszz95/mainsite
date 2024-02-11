import { projectsList } from '@/constans/projects'
import CenteredSection from '../layout/CenteredSection'
import SectionBlock from '../UI/SectionBlock'
import SingleProjectLinks from './SingleProjectLinks'

type ComponentType = {
	title: string
	shortDesc: string
	description: string
	contents: string[]
	github: string
	live: string
}

const SingleProjectInfo: React.FC<ComponentType> = ({ title, shortDesc, description, contents, github, live }) => {
	return (
		<div className='w-full relative flex flex-col justify-center items-center overflow-hidden'>
			<h1 className='text-4xl xl:text-5xl mt-8 text-center lg:mt-16'>
				<span className='text-hightlight'>{title}</span>
			</h1>
			<CenteredSection classes='flex flex-col lg:flex-row gap-6 items-center lg:items-stretch lg:gap-x-16'>
				<div className='flex flex-col items-center text-center lg:w-1/2'>
					<h2 className='text-3xl xl:text-4xl my-6'>
						About <span className='text-hightlight'>project</span>
					</h2>
					<p className='mb-4 lg:text-lg'>{shortDesc}</p>
					<p className='mb-4 lg:text-lg'>{description}</p>
				</div>
				<div className='flex flex-col items-center lg:w-1/2 px-4'>
					<h2 className='text-3xl xl:text-4xl my-6'>
						Project <span className='text-hightlight'>contains</span>
					</h2>
					<ol className='list-disc'>
						{contents.map(item => (
							<li key={item} className='lg:text-lg'>
								{item}
							</li>
						))}
					</ol>
				</div>
			</CenteredSection>
			<SingleProjectLinks github={github} live={live} />
			<SectionBlock direction='left' />
		</div>
	)
}

export default SingleProjectInfo
