import { projectsList } from '../../constans/projects'
import ProjectItem from '../projectItem/ProjectItem'

const ProjectsListSection = () => {
	return (
		<ul className='w-full'>
			{projectsList.map(proj => (
				<li className='w-full flex flex-col items-center projectsList'>
					<ProjectItem
						title={proj.title}
						key={proj.title}
						description={proj.shortDesc}
						stack={proj.technologies}
						link={proj.link}
						photo={proj.photos[0]}
					/>
				</li>
			))}
		</ul>
	)
}

export default ProjectsListSection
