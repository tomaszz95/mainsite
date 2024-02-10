import SingleProjectImages from '../singleProjectDetails/SingleProjectImages'
import SectionBlock from '../UI/SectionBlock'

type ComponentType = {
	project: any
}

const SingleProjectView: React.FC<ComponentType> = ({ project }) => {
	return (
		<div className='w-full relative flex flex-col items-center'>
			<h1 className='text-4xl xl:text-5xl my-8 text-center lg:mb-2'>
				<span className='text-hightlight'>{project.title}</span>
			</h1>
			<SingleProjectImages photos={project.photos} />
			<SectionBlock direction='left' />
		</div>
	)
}

export default SingleProjectView
