import CenteredSection from '../layout/CenteredSection'
import CardContainer from '../homepageCards/CardContainer'

const ProjectsSection = () => {
	return (
		<CenteredSection classes='flex flex-col items-center mx-auto max-w-[1380px] pb-0 xl:pt-8'>
			<h2 className='text-4xl mb-3'>
				Selected <span className='text-hightlight'>projects</span>
			</h2>
			<p className='mb-6 text-lg text-center'>
				If you want to know more about the projects{' '}
				<a href='/projects' className='text-hightlight hover:underline'>
					click here
				</a>
			</p>
			<CardContainer />
		</CenteredSection>
	)
}

export default ProjectsSection
