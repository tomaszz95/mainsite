import { motion } from 'framer-motion'

type ComponentType = {
	message: string
	onCloseModal: () => void
}

const FormModal: React.FC<ComponentType> = ({ message, onCloseModal }) => {
	return (
		<div className='fixed top-0 w-screen h-full flex flex-col items-center justify-center p-6'>
			<motion.div
				className='flex flex-col justify-center text-center w-full bg-main rounded-lg max-w-[600px] z-30 p-12'
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}>
				{message.split('\n').map((line, index) => (
					<p className='text-greylish text-2xl mb-4 first:text-3xl first:text-secondary' key={index}>
						{line}
					</p>
				))}
				<button
					onClick={onCloseModal}
					className='block mx-auto bg-hightlight rounded-xl hover:bg-hightlightHover duration-300 py-3 px-8 min-w-[150px] md:min-w-[200px] lg:min-w-[230px] lg:text-lg mt-8'>
					Close modal
				</button>
			</motion.div>
			<div className='bg-primary opacity-90 w-full h-full absolute t-0 left-0 z-10' />
		</div>
	)
}

export default FormModal
