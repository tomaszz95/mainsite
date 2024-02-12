type ComponentType = {
	text: string
	coloredText: string
}

const HeadingTwo: React.FC<ComponentType> = ({ text, coloredText }) => {
	return (
		<h2 className='text-3xl xl:text-4xl mt-6 mb-8 text-center'>
			{text} <span className='text-hightlight'>{coloredText}</span>
		</h2>
	)
}

export default HeadingTwo
