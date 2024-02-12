import Image from 'next/image'

type ComponentType = {
	stack: { name: string; icon: any }[]
	classes?: string
}

const StackList: React.FC<ComponentType> = ({ stack, classes }) => {
	return (
		<ul className={`mt-3 lg:mt-6 grid grid-cols-2 md:grid-cols-3  items-center text-center gap-6 ${classes}`}>
			{stack.map(item => (
				<li key={item.name} className='flex flex-col items-center gap-2'>
					<Image src={item.icon} alt={`${item.name} icon`} className='w-16 mb-2' />
					<span className='bg-primary py-3 px-6 xl:text-lg rounded-3xl min-w-[130px]'>{item.name}</span>
				</li>
			))}
		</ul>
	)
}

export default StackList
