import { ReactNode } from 'react'
import Link from 'next/link'

type ComponentType = {
	href: string
	children: ReactNode
	openNewWindow: boolean
	small?: boolean
}

const LinkButton: React.FC<ComponentType> = ({ href, children, openNewWindow, small }) => {
	const buttonClasses = `bg-hightlight rounded-xl hover:bg-hightlightHover duration-300 ${small ? 'py-3' : 'py-4'} ${
		small ? 'px-6' : 'px-8'
	} lg:text-lg`

	if (openNewWindow) {
		return (
			<Link href={href} className={buttonClasses} target='_blank' rel='noopener noreferrer'>
				{children}
			</Link>
		)
	} else {
		return (
			<Link href={href} className={buttonClasses}>
				{children}
			</Link>
		)
	}
}

export default LinkButton
