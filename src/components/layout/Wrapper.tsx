import { ReactNode } from 'react'

interface ComponentType {
	children: ReactNode
	classes?: string
}

const Wrapper: React.FC<ComponentType> = ({ children, classes }) => {
	return (
		<div className={`w-full relative flex flex-col items-center justify-center overflow-hidden ${classes}`}>
			{children}
		</div>
	)
}

export default Wrapper
