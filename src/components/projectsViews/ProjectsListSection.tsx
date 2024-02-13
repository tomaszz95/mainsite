import ProjectItem from '../projectItem/ProjectItem'
import { projectsList } from '../../constans/projects'

const ProjectsListSection = () => {
	return (
		<>
			<ul className='w-full relative mt-10 xl:mt-16'>
				{projectsList.map(proj => (
					<li className='w-full flex flex-col items-center projectsList' key={proj.title}>
						<ProjectItem
							title={proj.title}
							description={proj.shortDesc}
							stack={proj.technologies}
							link={proj.link}
							photo={proj.photos[0]}
						/>
					</li>
				))}
			</ul>
		</>
	)
}

export default ProjectsListSection
