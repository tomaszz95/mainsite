type ComponentType = {
	direction: string
}

const SectionBlock: React.FC<ComponentType> = ({ direction }) => {
	if (direction === 'left') {
		return (
			<div className='hidden lg:block absolute bottom-0 left-[-50px] h-9 w-1/2 xl:w-1/3 leftGradient skew-x-[35deg]' />
		)
	} else {
		return (
			<div className='hidden lg:block absolute top-0 right-[-50px] h-9 w-1/2 xl:w-1/3 rightGradient skew-x-[35deg]' />
		)
	}
}

export default SectionBlock
