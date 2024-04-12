import { render, screen } from '@testing-library/react'
import SingleWordpressProject from './SingleWordpressProject'
import { wordpressProjects } from '../../constans/projects'

const project = wordpressProjects[0]

describe('SingleProjectInfo component', () => {
	test('renders short description correctly', () => {
		render(<SingleWordpressProject project={project} left={true} />)

		const shortDescElement = screen.getByText(project.shortDesc)

		expect(shortDescElement).toBeInTheDocument()
	})

	test('renders description correctly', () => {
		render(<SingleWordpressProject project={project} left={true} />)

		const descriptionElement = screen.getByText(project.description)

		expect(descriptionElement).toBeInTheDocument()
	})
})
