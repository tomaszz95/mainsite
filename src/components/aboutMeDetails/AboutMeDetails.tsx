import Image from 'next/image'

import DetailsText from './DetailsText'
import DetailsInfo from './DetailsInfo'

import IMAGE from '../../assets/photos/profilephoto.jpg'

const AboutMeDetails = () => {
	return (
		<div className='flex flex-col md:flex-row justify-center items-center w-full max-w-[800px]'>
			<Image
				src={IMAGE}
				alt='Programmer with dreadlocks profile photo'
				className='w-full max-w-[400px] saturate-50 md:max-w-[350px] xl:max-w-[400px] md:mr-8'
				priority
			/>
			<DetailsText />
			<DetailsInfo />
		</div>
	)
}

export default AboutMeDetails
