import CenteredSection from '../layout/CenteredSection'
import StackList from '../StackList/StackList'
import { techStack, techToLearn } from '../../constans/aboutmeStack'

const AboutMeStackSection = () => {
	return (
		<div className='w-full evenSection flex justify-center'>
			<CenteredSection classes='flex flex-col justify-center items-center max-w-[1200px]'>
				<div>
					<h2 className='text-3xl xl:text-4xl mb-8 lg:mb-2 text-center'>
						Technology <span className='text-hightlight'>stack</span>
					</h2>
					<StackList
						stack={techStack}
						classes='mt-4 lg:mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 items-center text-center gap-6'
					/>
				</div>
				<div className='mt-12'>
					<h2 className='text-3xl xl:text-4xl mb-10 text-center'>
						Next to <span className='text-hightlight'>learn</span>
					</h2>
					<StackList
						stack={techToLearn}
						classes='mt-4 lg:mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 items-center text-center gap-6'
					/>
				</div>
			</CenteredSection>
		</div>
	)
}

export default AboutMeStackSection
