import { render, screen } from '@testing-library/react'
import { selectedProjects } from '../../constans/projects'
import ProjectsCardItem from './ProjectsCardItem'

const title = selectedProjects[0].title
const description = selectedProjects[0].description
const tech = selectedProjects[0].technologies
const link = selectedProjects[0].link

describe('ProjectsCardItem component', () => {
	test('displays title and description correctly', () => {
		render(<ProjectsCardItem title={title} description={description} tech={tech} link={link} />)

		expect(screen.getByText(title)).toBeInTheDocument()
		expect(screen.getByText(description)).toBeInTheDocument()
	})

	test('displays list of technologies correctly', () => {
		render(<ProjectsCardItem title={title} description={description} tech={tech} link={link} />)

		tech.forEach(techItem => {
			expect(screen.getByText(techItem)).toBeInTheDocument()
		})
	})

	test('passes correct link to LinkButton component', () => {
		render(<ProjectsCardItem title={title} description={description} tech={tech} link={link} />)

		const linkButton = screen.getByText('Click for more info!')
        
		expect(linkButton).toHaveAttribute('href', link)
	})
})
