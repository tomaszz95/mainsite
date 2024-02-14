import Wrapper from '../layout/Wrapper'
import CenteredSection from '../layout/CenteredSection'
import SectionBlock from '../UI/SectionBlock'
import ProjectsCardContainer from '../homepageProjectsCards/ProjectsCardContainer'
import HeadingTwo from '../UI/HeadingTwo'

const ProjectsSection = () => {
	return (
		<Wrapper classes='oddSection'>
			<SectionBlock direction='right' />
			<CenteredSection>
				<HeadingTwo text='Selected' coloredText='projects' />
				<p className='mb-6 text-lg lg:text-xl text-center'>
					If you want to know more about the projects{' '}
					<a href='/projects' className='text-hightlight hover:underline'>
						click here
					</a>
				</p>
				<ProjectsCardContainer />
			</CenteredSection>
			<SectionBlock direction='left' />
		</Wrapper>
	)
}

export default ProjectsSection
