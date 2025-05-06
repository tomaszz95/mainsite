import SocialLinks from '../socialIconLinks/SocialLinks'

import { aboutMeInfo } from '../../constans/aboutmeInfo'

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
		</div>
	)
}

export default DetailsInfo
