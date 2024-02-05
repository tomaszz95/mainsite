import { aboutMeInfo } from '../../constans/aboutmeInfo'
import SocialLinks from '../UI/SocialLinks'

const DetailsInfo = () => {
	return (
		<div className='w-full lg:ml-8 flex flex-col items-center text-center max-w-[500px] lg:w-1/3 xl:text-lg'>
			<ul className='w-full border-t-2 pt-4 pb-8 lg:border-none'>
				{aboutMeInfo.map(item => (
					<li key={item.value}>
						{item.property}: <span className='font-bold'>{item.value}</span>
					</li>
				))}
			</ul>
			<SocialLinks />
			<a
				href='/Tomasz Zuber CV.pdf'
				download='Tomasz Zuber CV.pdf'
				className='bg-hightlight py-3 px-5 mt-8 sm:mb-0 rounded-xl hover:bg-hightlightHover duration-300'>
				Download CV
			</a>
		</div>
	)
}

export default DetailsInfo
