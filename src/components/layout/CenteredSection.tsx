import { ReactNode } from 'react'

interface CenteredSectionProps {
	children: ReactNode
}

const CenteredSection: React.FC<CenteredSectionProps> = ({ children }) => {
	return <section className='container my-8 p-6'>{children}</section>
}

export default CenteredSection
