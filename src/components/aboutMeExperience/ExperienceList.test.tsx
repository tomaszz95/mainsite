import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import ExperienceList from './ExperienceList'
import { lifeCareer } from '../../constans/aboutmeEducation'

describe('ExperienceList component', () => {
	test('renders list items correctly', () => {
		const { getAllByRole } = render(<ExperienceList />)

		const listItems = getAllByRole('listitem')

		listItems.forEach((item, index) => {
			expect(item).toHaveTextContent(lifeCareer[index].name)
			expect(item).toHaveTextContent(lifeCareer[index].date)
			expect(item).toHaveTextContent(lifeCareer[index].description)
		})
	})

	test('renders school icon if item type is school', () => {
		const { getAllByRole } = render(<ExperienceList />)

		const schoolIcons = getAllByRole('img', { name: 'school icon' })
		schoolIcons.forEach(icon => {
			expect(icon).toBeInTheDocument()
		})
	})

	test('renders work icon if item type is not school', () => {
		const { getAllByRole } = render(<ExperienceList />)

		const workIcons = getAllByRole('img', { name: 'work icon' })
		workIcons.forEach(icon => {
			expect(icon).toBeInTheDocument()
		})
	})

	test('renders arrow icon for all but the last item', () => {
		const { getAllByAltText } = render(<ExperienceList />)

		const arrowIcons = getAllByAltText('arrow icon')

		expect(arrowIcons.length).toBe(lifeCareer.length - 1)
	})
})
