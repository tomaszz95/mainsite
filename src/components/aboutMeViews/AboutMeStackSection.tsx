import CenteredSection from '../layout/CenteredSection'
import StackList from '../aboutMeStack/StackList'
import { techStack, techToLearn } from '../../constans/aboutmeStack'

const AboutMeStackSection = () => {
	return (
		<div className='w-full evenSection flex justify-center'>
			<CenteredSection classes='flex flex-col justify-center items-center max-w-[1200px]'>
				<div>
					<h2 className='text-3xl xl:text-4xl mb-8 lg:mb-2 text-center'>
						Technology <span className='text-hightlight'>stack</span>
					</h2>
					<StackList stack={techStack} />
				</div>
				<div className='mt-12'>
					<h2 className='text-3xl xl:text-4xl mb-10 text-center'>
						Next to <span className='text-hightlight'>learn</span>
					</h2>
					<StackList stack={techToLearn} />
				</div>
			</CenteredSection>
		</div>
	)
}

export default AboutMeStackSection
