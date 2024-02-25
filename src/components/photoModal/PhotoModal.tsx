import Image, { StaticImageData } from 'next/image'

import { motion } from 'framer-motion'

type ComponentType = {
	photo: StaticImageData
	alt: string
	onCloseHandler: () => void
}

const PhotoModal: React.FC<ComponentType> = ({ photo, alt, onCloseHandler }) => {
	return (
		<div
			className='fixed top-0 w-screen h-full flex items-center justify-center cursor-zoom-out p-4'
			onClick={onCloseHandler}
			data-testid='modal'>
			<motion.div className='z-30' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
				<Image src={photo} alt={alt} />
			</motion.div>
			<div className='bg-primary opacity-90 w-full h-full absolute t-0 left-0 z-10' data-testid='modal-background' />
		</div>
	)
}

export default PhotoModal
