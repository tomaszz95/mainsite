import Image from 'next/image'

import DetailsText from './DetailsText'
import DetailsInfo from './DetailsInfo'

import IMAGE from '../../assets/photos/profilephoto.jpg'

const AboutMeDetails = () => {
	return (
		<div className='flex flex-col lg:flex-row justify-center items-center w-full max-w-[1200px]'>
			<Image
				src={IMAGE}
				alt='Programmer with dreadlocks profile photo'
				className='w-full max-w-[400px] saturate-50 lg:mr-8 lg:w-1/3'
				priority
			/>
			<DetailsText />
			<DetailsInfo />
		</div>
	)
}

export default AboutMeDetails
