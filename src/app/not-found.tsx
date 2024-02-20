import type { Metadata } from 'next'

import HeadingOne from '@/components/UI/HeadingOne'
import LinkButton from '@/components/UI/LinkButton'

export const metadata: Metadata = {
	title: 'Tomasz Żuber | Not Found',
	description: 'Not found page of Tomasz Żubers portfolio page.',
}

export default function NotFound() {
	return (
		<section className='w-full flex justify-center flex-col text-center notFound p-4 oddSection'>
			<HeadingOne text='The page' coloredText="doesn't exist!" />
			<p className='text-lg mb-10 lg:text-xl'>Sorry, the page you were looking for could not be found.</p>
			<LinkButton href='/' openNewWindow={false}>
				Go back to homepage
			</LinkButton>
		</section>
	)
}
