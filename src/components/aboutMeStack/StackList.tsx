import { techStack } from '../../constans/aboutmeStack'

const StackList = () => {
	return (
		<ul className='mt-4 lg:mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 items-center text-center gap-4'>
			{techStack.map(item => (
				<li key={item} className=' bg-primary py-3 px-8 text-sm rounded-3xl min-w-[130px]'>
					{item}
				</li>
			))}
		</ul>
	)
}

export default StackList
