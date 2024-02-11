type ComponentType = {
	text: string
	coloredText: string
}

const HeadingOne: React.FC<ComponentType> = ({ text, coloredText }) => {
	return (
		<h1 className='text-4xl xl:text-5xl my-10 text-center'>
			{text} <span className='text-hightlight'>{coloredText}</span>
		</h1>
	)
}

export default HeadingOne
