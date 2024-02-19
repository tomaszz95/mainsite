import { notFound } from 'next/navigation'

import SingleProjectView from '../../../components/singleProjectView/SingleProjectView'
import { filterSingleProject } from '../../../helpers/filterSingleProject'

type ComponentType = {
	params: { projName: string }
}

export async function generateMetadata({ params }: ComponentType) {
	const singleProject = filterSingleProject(params.projName)

	if (!singleProject) {
		notFound()
	}

	return {
		title: `Tomasz Żuber | ${singleProject.title}`,
		description: singleProject.description,
	}
}

const SingleProjectPage: React.FC<ComponentType> = ({ params }) => {
	const singleProject = filterSingleProject(params.projName)

	if (!singleProject) {
		notFound()
	}

	return <SingleProjectView project={singleProject} />
}

export default SingleProjectPage
