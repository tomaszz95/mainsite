import AboutMeDetails from '../aboutMeDetails/AboutMeDetails'
import CenteredSection from '../layout/CenteredSection'

const PersonalInfoSection = () => {
	return (
		<CenteredSection classes='max-w-[1380px] flex flex-col items-center justify-center xl:mb-10'>
			<h1 className='text-4xl mb-8 text-center md:mb-2'>
				About <span className='text-hightlight'>Myself</span>
			</h1>
			<AboutMeDetails />
		</CenteredSection>
	)
}

export default PersonalInfoSection
