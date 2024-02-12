import LinkButton from '../UI/LinkButton'

type ComponentType = {
	github: string
	live: string
}

const SingleProjectLinks: React.FC<ComponentType> = ({ github, live }) => {
	return (
		<div className='mb-20 flex items-center justify-center flex-wrap text-center gap-10'>
			<LinkButton href={github} openNewWindow={true}>
				Github
			</LinkButton>
			<LinkButton href={live} openNewWindow={true}>
				Live
			</LinkButton>
		</div>
	)
}

export default SingleProjectLinks
