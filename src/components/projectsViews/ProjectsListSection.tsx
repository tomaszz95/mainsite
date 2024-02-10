import { projectsList } from '../../constans/projects'
import ProjectItem from '../projectItem/ProjectItem'
import SectionBlock from '../UI/SectionBlock'

const ProjectsListSection = () => {
	return (
		<ul className='w-full relative pb-10'>
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
			<SectionBlock direction='left' />
		</ul>
	)
}

export default ProjectsListSection
