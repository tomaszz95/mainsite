import { render, screen, fireEvent } from '@testing-library/react'
import { projectsList } from '../../constans/projects'
import ProjectItemInfo from './ProjectItemInfo'

describe('ProjectItemInfo component', () => {
	test('renders description', () => {
		render(
			<ProjectItemInfo
				title={projectsList[0].title}
				description={projectsList[0].description}
				stack={projectsList[0].technologies}
				link={projectsList[0].link}
			/>
		)

		const description = screen.getByText(projectsList[0].description)

		expect(description).toBeInTheDocument()
	})

	test('passes correct link to LinkButton', () => {
		render(
			<ProjectItemInfo
				title={projectsList[0].title}
				description={projectsList[0].description}
				stack={projectsList[0].technologies}
				link={projectsList[0].link}
			/>
		)

		const linkButton = screen.getByText('More info')

		expect(linkButton).toHaveAttribute('href', `projects/${projectsList[0].link}`)
	})

	test('redirects to correct page when LinkButton is clicked', () => {
		render(
			<ProjectItemInfo
				title={projectsList[0].title}
				description={projectsList[0].description}
				stack={projectsList[0].technologies}
				link={projectsList[0].link}
			/>
		)

		const linkButton = screen.getByText('More info')

		fireEvent.click(linkButton)
	})
})
