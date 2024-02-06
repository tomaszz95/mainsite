import SectionBlock from '../UI/SectionBlock'
import CenteredSection from '../layout/CenteredSection'
import ProjectsCardContainer from '../homepageProjectsCards/ProjectsCardContainer'

const ProjectsSection = () => {
	return (
		<div className='w-full relative flex justify-center overflow-hidden'>
			<SectionBlock direction='right' />
			<CenteredSection classes='flex flex-col items-center mx-auto max-w-[1380px] xl:py-10'>
				<h2 className='text-3xl xl:text-4xl mb-3'>
					Selected <span className='text-hightlight'>projects</span>
				</h2>
				<p className='mb-6 text-lg text-center'>
					If you want to know more about the projects{' '}
					<a href='/projects' className='text-hightlight hover:underline'>
						click here
					</a>
				</p>
				<ProjectsCardContainer />
			</CenteredSection>
			<SectionBlock direction='left' />
		</div>
	)
}

export default ProjectsSection
