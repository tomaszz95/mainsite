import { ReactNode } from 'react'

interface ComponentType {
	children: ReactNode
	classes?: string
}

const CenteredSection: React.FC<ComponentType> = ({ children, classes }) => {
	return (
		<section
			className={`w-full max-w-[1400px] flex flex-col items-center justify-center px-5 py-10 lg:px-10 lg:py-20 overflow-hidden ${classes}`}>
			{children}
		</section>
	)
}

export default CenteredSection
