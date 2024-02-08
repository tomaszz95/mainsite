import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Tomasz Żuber | Projects',
	description: 'A site that shows projects created by Tomasz Żuber',
}

const ProjectPage = () => {
	return (
		<>
			<h1 className='text-4xl xl:text-5xl my-6 p-4 text-center'>
				My <span className='text-hightlight'>projects</span>
			</h1>
		</>
	)
}

export default ProjectPage
