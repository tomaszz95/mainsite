import SingleProjectView from '../../../components/singleProjectView/SingleProjectView'
import { filterSingleProject } from '../../../helpers/filterSingleProject'

type ComponentType = {
	params: { projName: string }
}

const SingleProjectPage: React.FC<ComponentType> = ({ params }) => {
	const filteredProject = filterSingleProject(params.projName)

	return <SingleProjectView project={filteredProject} />
}

export default SingleProjectPage
