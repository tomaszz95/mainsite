import { ReactNode } from 'react'

interface ComponentType {
	children: ReactNode
	classes?: string
}

const CenteredSection: React.FC<ComponentType> = ({ children, classes }) => {
	return <section className={`${classes} w-full container my-8 p-6`}>{children}</section>
}

export default CenteredSection
