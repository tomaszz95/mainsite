import { aboutMeInfo } from '../../constans/aboutmeInfo'
import SocialLinks from '../socialIconLinks/SocialLinks'

const DetailsInfo = () => {
	return (
		<div className='w-full flex flex-col items-center text-center max-w-[500px] lg:col-start-3 lg:col-end-4 xl:text-lg'>
			<ul className='w-full border-t-2 pt-4 pb-8 lg:border-none'>
				{aboutMeInfo.map(item => (
					<li key={item.value}>
						{item.property}: <span className='font-bold'>{item.value}</span>
					</li>
				))}
			</ul>
			<SocialLinks />
			<a
				href='Tomasz Zuber CV.pdf'
				download='Tomasz Zuber CV.pdf'
				className='bg-hightlight rounded-xl hover:bg-hightlightHover duration-300 py-3 px-10 lg:text-lg mt-10'>
				Download CV
			</a>
		</div>
	)
}

export default DetailsInfo
