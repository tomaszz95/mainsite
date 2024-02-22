'use client'

import { useState } from 'react'
import Image from 'next/image'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { lifeCareer } from '../../constans/aboutmeEducation'

import ARROW_ICON from '../../assets/icons/arrowDown.png'
import SCHOOL_ICON from '../../assets/icons/school.png'
import WORK_ICON from '../../assets/icons/bag.png'

const ExperienceList = () => {
	const [isVisible, setIsVisible] = useState(false)
	const [ref, inView] = useInView({
		threshold: 0.3,
	})

	if (inView && !isVisible) {
		setIsVisible(true)
	}

	return (
		<ul className='flex flex-col justify-around items-stretch mt-10 w-full max-w-[500px]' ref={ref}>
			{lifeCareer.map((item, index) => (
				<motion.li
					key={item.description}
					className='relative'
					initial='hidden'
					animate={inView ? 'show' : 'hidden'}
					custom={index % 2 === 0 ? -1 : 1}
					variants={{
						hidden: { opacity: 0, x: index % 2 === 0 ? 450 : -450 },
						show: {
							opacity: 1,
							x: 0,
							transition: {
								type: 'tween',
								duration: 0.7,
								delay: index * 0.1,
							},
						},
					}}>
					<div className='text-center bg-main p-4 py-8 rounded-2xl relative'>
						<h3 className='text-xl xl:text-2xl'>{item.name}</h3>
						<i className='block my-1 xl:text-lg'>{item.date}</i>
						<p className='font-bold xl:text-lg'>{item.description}</p>
						<Image
							alt={item.type === 'School' ? 'school icon' : 'work icon'}
							src={item.type === 'School' ? SCHOOL_ICON : WORK_ICON}
							className='absolute -top-6 right-2 w-12'
						/>
					</div>
					{index !== lifeCareer.length - 1 && (
						<motion.div animate={{ y: [0, -8, 0, 8, 0], transition: { duration: 3, repeat: Infinity } }}>
							<Image src={ARROW_ICON} alt='arrow icon' className='mx-auto my-5' />
						</motion.div>
					)}
				</motion.li>
			))}
		</ul>
	)
}

export default ExperienceList
