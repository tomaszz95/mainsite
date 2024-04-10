import SingleProjectContains from '../singleProjectDetails/SingleProjectContains'
import SingleProjectInfo from '../singleProjectDetails/SingleProjectInfo'
import SingleProjectStack from '../singleProjectDetails/SingleProjectStack'

import { SingleProjectType } from '../../types/singleProjectType'

type ComponentType = {
	project: SingleProjectType
}

const WordpressProjectsView: React.FC<ComponentType> = ({ project }) => {
	return (
		<>
			<SingleProjectInfo project={project} />
			<SingleProjectStack technologies={project.technologies} />
			<SingleProjectContains contents={project.contents} photos={[project.photos[2], project.photos[3]]} />
		</>
	)
}

export default WordpressProjectsView
