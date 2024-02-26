import { render, screen } from '@testing-library/react'
import ProjectsListSection from './ProjectsListSection'
import { projectsList } from '../../constans/projects'

describe('ProjectsListSection component', () => {
	test('renders projects list with correct titles', () => {
		render(<ProjectsListSection />)

		projectsList.forEach(proj => {
			const projectTitle = screen.getByText(proj.title)
			expect(projectTitle).toBeInTheDocument()
		})
	})
})
