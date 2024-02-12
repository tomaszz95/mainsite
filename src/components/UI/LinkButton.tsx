import { ReactNode } from 'react'
import Link from 'next/link'

type ComponentType = {
	href: string
	children: ReactNode
	openNewWindow: boolean
}

const LinkButton: React.FC<ComponentType> = ({ href, children, openNewWindow }) => {
	const buttonClasses = `block mx-auto bg-hightlight rounded-xl hover:bg-hightlightHover duration-300 py-3 w-[180px] lg:w-[210px] xl:w-[240px] px-8 lg:text-lg text-center`

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
