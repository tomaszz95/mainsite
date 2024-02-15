'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

type ComponentType = {
	text: string
	coloredText: string
}

const HeadingOne: React.FC<ComponentType> = ({ text, coloredText }) => {
	const [isTyping, setIsTyping] = useState(false)
	const [characterArray, setCharacterArray] = useState<string[]>([])

	useEffect(() => {
		setIsTyping(true)
		const characters = coloredText.split('')

		setCharacterArray(characters)
	}, [])

	return (
		<h1 className='text-4xl xl:text-5xl mt-8 mb-10 text-center'>
			{text}{' '}
			<motion.span
				className='text-hightlight'
				animate={{ opacity: isTyping ? 1 : 0 }}
				transition={{ duration: 0.5, delay: 0.5 }}>
				{characterArray.map((char, index) => (
					<motion.span
						key={index}
						style={{ display: 'inline-block' }}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.07 * index }}>
						{char === ' ' ? '\u00A0' : char}
					</motion.span>
				))}
			</motion.span>
		</h1>
	)
}

export default HeadingOne
