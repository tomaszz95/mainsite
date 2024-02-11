import Image from 'next/image'

import { lifeCareer } from '../../constans/aboutmeEducation'

import ARROW_ICON from '../../assets/icons/arrowDown.png'
import SCHOOL_ICON from '../../assets/icons/school.png'
import WORK_ICON from '../../assets/icons/bag.png'

const ExperienceList = () => {
	return (
		<ul className='flex flex-col justify-around items-stretch mt-10 w-full max-w-[500px]'>
			{lifeCareer.map((item, index) => (
				<li key={item.description}>
					<div className='text-center bg-main p-4 py-8 rounded-2xl relative'>
						<h3 className='text-xl xl:text-2xl'>{item.name}</h3>
						<i className='block my-1 xl:text-lg'>{item.date}</i>
						<p className='font-bold xl:text-lg'>{item.description}</p>
						<Image
							alt=''
							src={item.type === 'School' ? SCHOOL_ICON : WORK_ICON}
							className='absolute -top-6 right-2 w-12'
						/>
					</div>
					{index !== lifeCareer.length - 1 && <Image src={ARROW_ICON} alt='' className='mx-auto my-5' />}
				</li>
			))}
		</ul>
	)
}

export default ExperienceList
