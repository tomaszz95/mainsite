import Image, { StaticImageData } from 'next/image'

type ComponentType = {
	photo: StaticImageData
	alt: string
	onCloseHandler: () => void
}

const PhotoModal: React.FC<ComponentType> = ({ photo, alt, onCloseHandler }) => {
	return (
		<div
			className='fixed top-0 w-screen h-full flex items-center justify-center cursor-zoom-out p-4'
			onClick={onCloseHandler}>
			<Image src={photo} alt={alt} className='z-30' />
			<div className='bg-primary opacity-90 w-full h-full absolute t-0 left-0 z-10' />
		</div>
	)
}

export default PhotoModal
