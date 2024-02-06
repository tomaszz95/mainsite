import ExperienceList from '../aboutMeExperience/ExperienceList'
import CenteredSection from '../layout/CenteredSection'
import SectionBlock from '../UI/SectionBlock'

const ExperienceSection = () => {
	return (
		<div className='w-full relative flex justify-center overflow-hidden'>
			<SectionBlock direction='right' />
			<CenteredSection classes='flex flex-col items-center mx-auto max-w-[1380px] xl:py-10'>
				<h2 className='text-3xl xl:text-4xl mb-3 text-center'>
					Experience and <span className='text-hightlight'>education</span>
				</h2>
				<ExperienceList />
			</CenteredSection>
			<SectionBlock direction='left' />
		</div>
	)
}

export default ExperienceSection
