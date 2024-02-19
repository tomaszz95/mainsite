import type { Metadata } from 'next'

import ProjectsListSection from '../../components/projectsViews/ProjectsListSection'

export const metadata: Metadata = {
	title: 'Tomasz Żuber | Projects',
	description: 'A site that shows projects created by Tomasz Żuber',
}

const ProjectPage = () => {
	return (
		<>
			<ProjectsListSection />
		</>
	)
}

export default ProjectPage
