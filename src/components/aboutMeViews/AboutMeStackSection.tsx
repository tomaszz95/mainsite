import CenteredSection from '../layout/CenteredSection'
import StackList from '../aboutMeStack/StackList'

const AboutMeStackSection = () => {
	return (
		<div className='w-full evenSection flex justify-center'>
			<CenteredSection classes='flex flex-col justify-center items-center max-w-[1200px]'>
				<h2 className='text-3xl mb-8 lg:mb-2 text-center'>
					Technology <span className='text-hightlight'>stack</span>
				</h2>
				<StackList />
			</CenteredSection>
		</div>
	)
}

export default AboutMeStackSection
