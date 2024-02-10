import { projectsList } from '../constans/projects'

export const filterSingleProject = (projectLink: string) => {
	return projectsList.find(project => project.link === projectLink)
}
