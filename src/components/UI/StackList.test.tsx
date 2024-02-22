import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import StackList from './StackList'
import REACT_ICON from '../../assets/icons/reactIcon.png'
import REDUX_ICON from '../../assets/icons/reduxIcon.png'

export const techStack = [
	{ name: 'React', icon: REACT_ICON },
	{ name: 'React Redux', icon: REDUX_ICON },
]

describe('StackList component', () => {
	test('renders all stack items', () => {
		render(<StackList stack={techStack} classes='' />)

		const stackItems = screen.getAllByRole('listitem')

		expect(stackItems).toHaveLength(techStack.length)
	})

	test('renders images for all stack items', () => {
		render(<StackList stack={techStack} classes='' />)

		const stackImages = screen.getAllByRole('img')
		expect(stackImages).toHaveLength(techStack.length)

		techStack.forEach((item, index) => {
			expect(stackImages[index]).toHaveAttribute('alt', `${item.name} icon`)
		})
	})
})
