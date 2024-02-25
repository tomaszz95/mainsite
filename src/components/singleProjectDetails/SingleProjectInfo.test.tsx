import { render, screen } from '@testing-library/react'
import SingleProjectInfo from './SingleProjectInfo'
import { projectsList } from '../../constans/projects'

const project = projectsList[0]

describe('SingleProjectInfo component', () => {
	test('renders short description correctly', () => {
		render(<SingleProjectInfo project={project} />)

		const shortDescElement = screen.getByText(project.shortDesc)

		expect(shortDescElement).toBeInTheDocument()
	})

	test('renders description correctly', () => {
		render(<SingleProjectInfo project={project} />)

		const descriptionElement = screen.getByText(project.description)

		expect(descriptionElement).toBeInTheDocument()
	})
})
