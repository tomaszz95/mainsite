import { StaticImageData } from 'next/image'
import CenteredSection from '../layout/CenteredSection'
import StackList from '../StackList/StackList'

type ComponentType = {
	technologies: { name: string; icon: StaticImageData }[]
}

const SingleProjectStack: React.FC<ComponentType> = ({ technologies }) => {
	return (
		<div className='w-full flex justify-center evenSection'>
			<CenteredSection classes='flex flex-col justify-center items-center max-w-[1200px]'>
				<h2 className='text-3xl xl:text-4xl mb-8 lg:mb-2 text-center'>
					Technology <span className='text-hightlight'>stack</span>
				</h2>
				<StackList
					stack={technologies}
					classes='mt-4 lg:mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 items-center text-center gap-6'
				/>
			</CenteredSection>
		</div>
	)
}

export default SingleProjectStack
