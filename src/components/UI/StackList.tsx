'use client'

import { useState } from 'react'
import Image from 'next/image'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

type ComponentType = {
	stack: { name: string; icon: any }[]
	classes: string
}

const StackList: React.FC<ComponentType> = ({ stack, classes }) => {
	const [animationPlayed, setAnimationPlayed] = useState(false)

	const { ref, inView } = useInView({
		threshold: 0.1,
	})

	return (
		<motion.ul
			className={`mt-3 lg:mt-6 grid grid-cols-2 md:grid-cols-3 items-center text-center gap-6 ${classes}`}
			ref={ref}
			initial='hidden'
			animate={animationPlayed || inView ? 'show' : 'hidden'}
			variants={{
				hidden: { opacity: 0 },
				show: {
					opacity: 1,
					transition: {
						staggerChildren: 0.1,
					},
				},
			}}
			onAnimationComplete={() => {
				if (!animationPlayed) {
					setAnimationPlayed(true)
				}
			}}>
			{stack.map(item => (
				<motion.li
					key={item.name}
					className='flex flex-col items-center gap-2'
					variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>
					<Image src={item.icon} alt={`${item.name} icon`} className='w-16 h-16 mb-2' />
					<span className='bg-primary py-3 px-6 xl:text-lg rounded-3xl min-w-[130px]'>{item.name}</span>
				</motion.li>
			))}
		</motion.ul>
	)
}

export default StackList
