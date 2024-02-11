import SingleProjectImages from '../singleProjectDetails/SingleProjectImages'
import SingleProjectInfo from '../singleProjectDetails/SingleProjectInfo'
import SingleProjectStack from '../singleProjectDetails/SingleProjectStack'

type ComponentType = {
	project: any
}

const SingleProjectView: React.FC<ComponentType> = ({ project }) => {
	return (
		<>
			<SingleProjectInfo
				title={project.title}
				description={project.description}
				shortDesc={project.shortDesc}
				contents={project.contents}
				github={project.github}
				live={project.live}
			/>
			<SingleProjectStack technologies={project.technologies} />
			<SingleProjectImages photos={project.photos} />
		</>
	)
}

export default SingleProjectView
