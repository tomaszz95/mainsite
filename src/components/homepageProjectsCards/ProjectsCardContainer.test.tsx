import { render, screen } from '@testing-library/react'

import ProjectsCardContainer from './ProjectsCardContainer'

import { selectedProjects } from '../../constans/projects'

describe('ProjectsCardContainer component', () => {
	test('renders projects correctly', () => {
		render(<ProjectsCardContainer />)

		selectedProjects.forEach(proj => {
			expect(screen.getByText(proj.title)).toBeInTheDocument()
			expect(screen.getByText(proj.description)).toBeInTheDocument()
		})
	})
})
