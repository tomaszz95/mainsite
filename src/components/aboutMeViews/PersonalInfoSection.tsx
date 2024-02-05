import AboutMeDetails from '../aboutMeDetails/AboutMeDetails'
import CenteredSection from '../layout/CenteredSection'
import SectionBlock from '../UI/SectionBlock'

const PersonalInfoSection = () => {
	return (
		<div className='w-full relative flex justify-center overflow-x-hidden'>
			<CenteredSection classes='max-w-[1380px] flex flex-col items-center justify-center xl:mb-10'>
				<h1 className='text-4xl mb-8 text-center lg:mb-2'>
					About <span className='text-hightlight'>Myself</span>
				</h1>
				<AboutMeDetails />
			</CenteredSection>
			<SectionBlock direction='left' />
		</div>
	)
}

export default PersonalInfoSection
