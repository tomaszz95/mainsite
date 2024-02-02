import CardItem from './ProjectsCardItem'

import { selectedProjects } from '../../constans/projects'

const ProjectsCardContainer = () => {
	return (
		<div className='flex flex-wrap gap-16 justify-around items-stretch w-full my-6 px-3 xl:py-8 xl:px-14'>
			{selectedProjects.map(proj => (
				<CardItem
					key={proj.title}
					title={proj.title}
					description={proj.description}
					tech={proj.technologies}
					link={proj.link}
				/>
			))}
		</div>
	)
}

export default ProjectsCardContainer
