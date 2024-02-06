import { lifeCareer } from '../../constans/aboutmeEducation'
import ARROW_ICON from '../../assets/icons/arrowDown.png'
import Image from 'next/image'

const ExperienceList = () => {
	return (
		<ul className='flex flex-col justify-around items-stretch mt-8 w-full max-w-[500px]'>
			{lifeCareer.map((item, index) => (
				<li key={item.description}>
					<div className='text-center bg-main p-6 rounded-2xl'>
						<h3 className='text-xl xl:text-2xl'>{item.name}</h3>
						<i className='block my-1 xl:text-lg'>{item.date}</i>
						<p className='font-bold xl:text-lg'>{item.description}</p>
					</div>
					{index !== lifeCareer.length - 1 && <Image src={ARROW_ICON} alt='' className='mx-auto my-6' />}
				</li>
			))}
		</ul>
	)
}

export default ExperienceList