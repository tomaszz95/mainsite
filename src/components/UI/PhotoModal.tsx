import Image from 'next/image'

type ComponentType = {
	photo: any
	title: string
	onCloseHandler: () => void
}

const PhotoModal: React.FC<ComponentType> = ({ photo, title, onCloseHandler }) => {
	return (
		<div className='fixed top-0 w-screen h-full flex items-center justify-center' onClick={onCloseHandler}>
			<Image src={photo} alt={`${title} photo`} className='z-30' />
			<div className='bg-primary opacity-90 w-full h-full absolute t-0 left-0 z-10' />
		</div>
	)
}

export default PhotoModal
