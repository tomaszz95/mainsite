import Link from 'next/link'

type ComponentType = {
	github: string
	live: string
}

const SingleProjectLinks: React.FC<ComponentType> = ({ github, live }) => {
	const linksClasses =
		'bg-hightlight py-3 w-[180px] md:w-[200px] lg:w-[230px] xl:w-[250px] rounded-xl hover:bg-hightlightHover duration-300 lg:text-lg'
	return (
		<div className='mb-20 flex flex-wrap items-center justify-center text-center gap-10'>
			<Link href={github} target='_blank' rel='noopener noreferrer' className={linksClasses}>
				Github
			</Link>
			<Link href={live} target='_blank' rel='noopener noreferrer' className={linksClasses}>
				Live
			</Link>
		</div>
	)
}

export default SingleProjectLinks
