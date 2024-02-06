import Image from 'next/image'

type ComponentType = {
	stack: { name: string; icon: any }[]
}

const StackList: React.FC<ComponentType> = ({ stack }) => {
	return (
		<ul className='mt-4 lg:mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 items-center text-center gap-6'>
			{stack.map(item => (
				<li key={item.name} className='flex flex-col items-center'>
					<Image src={item.icon} alt={`${item.name} icon`} className='w-20 mb-2' />
					<span className='bg-primary py-3 px-8 text-sm rounded-3xl min-w-[130px]'>{item.name}</span>
				</li>
			))}
		</ul>
	)
}

export default StackList
