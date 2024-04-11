import SingleWordpressProject from '../singleProjectDetails/SingleWordpressProject'
import SingleProjectStack from '../singleProjectDetails/SingleProjectStack'

import { WordpressProjectType } from '../../types/singleProjectType'
import { wordpressTechnologies } from '../../constans/projects'

type ComponentType = {
	project: WordpressProjectType[]
}

const WordpressProjectsView: React.FC<ComponentType> = ({ project }) => {
	return (
		<>
			<SingleWordpressProject project={project[0]} left={false} />
			<SingleProjectStack technologies={wordpressTechnologies} />
			<SingleWordpressProject project={project[1]} left={true} />
		</>
	)
}

export default WordpressProjectsView
