'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import CardItem from './ProjectsCardItem'

import { selectedProjects } from '../../constans/projects'

const ProjectsCardContainer = () => {
	const { ref, inView } = useInView({
		threshold: 0.1,
	})

	return (
		<motion.div
			className='flex flex-wrap gap-16 justify-around items-stretch w-full my-6 px-3 xl:px-14'
			ref={ref}
			initial='hidden'
			animate={inView ? 'show' : 'hidden'}
			variants={{
				hidden: { opacity: 0, y: 100 },
				show: {
					opacity: 1,
					y: 0,
					transition: {
						staggerChildren: 0.1,
						duration: 0.5,
					},
				},
			}}>
			{selectedProjects.map(proj => (
				<CardItem
					key={proj.title}
					title={proj.title}
					description={proj.description}
					tech={proj.technologies}
					link={proj.link}
				/>
			))}
		</motion.div>
	)
}

export default ProjectsCardContainer
