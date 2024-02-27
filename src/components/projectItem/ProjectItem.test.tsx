import { render, screen, fireEvent } from '@testing-library/react'
import { projectsList } from '../../constans/projects'
import ProjectItem from './ProjectItem'

describe('ProjectItem component', () => {
	test('renders image with correct alt attributes', () => {
		render(
			<ProjectItem
				title={projectsList[0].title}
				description={projectsList[0].description}
				stack={projectsList[0].technologies}
				link={projectsList[0].link}
				photo={projectsList[0].photos[0]}
			/>
		)

		const image = screen.getByAltText(projectsList[0].photos[0].alt)
		expect(image).toBeInTheDocument()
	})

	test('displays photo modal when isClicked is true', () => {
		render(
			<ProjectItem
				title={projectsList[0].title}
				description={projectsList[0].description}
				stack={projectsList[0].technologies}
				link={projectsList[0].link}
				photo={projectsList[0].photos[0]}
			/>
		)

		expect(screen.queryByTestId('modal')).not.toBeInTheDocument()

		const image = screen.getByAltText(projectsList[0].photos[0].alt)
		fireEvent.click(image)

		const modal = screen.getByTestId('modal')
		expect(modal).toBeInTheDocument()
	})

	test('does not display photo modal when isClicked is false', () => {
		render(
			<ProjectItem
				title={projectsList[0].title}
				description={projectsList[0].description}
				stack={projectsList[0].technologies}
				link={projectsList[0].link}
				photo={projectsList[0].photos[0]}
			/>
		)

		expect(screen.queryByTestId('modal')).not.toBeInTheDocument()

		const image = screen.getByAltText(projectsList[0].photos[0].alt)
		fireEvent.click(image)

		const modal = screen.getByTestId('modal')
		fireEvent.click(modal)

		expect(screen.queryByTestId('modal')).not.toBeInTheDocument()
	})
})
