import Link from 'next/link'

type ComponentType = { title: string; description: string; tech: string[]; link: string }

const ProjectsCardItem: React.FC<ComponentType> = ({ title, description, tech, link }) => {
	return (
		<div className='flex flex-col justify-between border border-hightlight  even:scale-110 border-1 max-w-[340px] w-full text-center rounded-3xl bg-main p-6 hover:scale-[0.98] even:hover:scale-[1.08] duration-300'>
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
			<Link
				target='_blank'
				rel='noopener noreferrer'
				href={link}
				className='bg-hightlight hover:bg-hightlightHover rounded-xl  duration-300 py-3 px-5 mt-6 w-48 mx-auto'>
				Check project site!
			</Link>
		</div>
	)
}

export default ProjectsCardItem
