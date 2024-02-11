import { ReactNode } from 'react'

interface ComponentType {
	children: ReactNode
	classes?: string
}

const CenteredSection: React.FC<ComponentType> = ({ children, classes }) => {
	return (
		<section
			className={`w-full max-w-[1400px] flex flex-col items-center justify-center px-6 py-12 lg:px-12 lg:py-24 overflow-hidden ${classes}`}>
			{children}
		</section>
	)
}

export default CenteredSection
