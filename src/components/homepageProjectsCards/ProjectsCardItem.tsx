import { motion } from 'framer-motion'

import LinkButton from '../UI/LinkButton'

type ComponentType = { title: string; description: string; tech: string[]; link: string }

const ProjectsCardItem: React.FC<ComponentType> = ({ title, description, tech, link }) => {
	return (
		<motion.div
			className='flex flex-col justify-between gap-6 border border-hightlight even:scale-110 border-1 max-w-[310px] 2xl:max-w-[330px] w-full text-center rounded-3xl bg-main p-6 sm:mt-8 hover:scale-[0.98] even:hover:scale-[1.08] duration-300'
			variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>
			<div>
				<h3 className='text-2xl mb-4 text-white'>{title}</h3>
				<p className='mb-6'>{description}</p>
			</div>
			<ul className='flex flex-wrap justify-around gap-4 w-full'>
				{tech.map(tech => (
					<li key={tech} className='bg-primary py-2 text-sm w-[45%] rounded-3xl'>
						{tech}
					</li>
				))}
			</ul>
			<LinkButton href={link} openNewWindow={false}>
				Click for more info!
			</LinkButton>
		</motion.div>
	)
}

export default ProjectsCardItem
