import FastContactSection from '../../components/contactViews/FastContactSection'
import FormContactSection from '../../components/contactViews/FormContactSection'

import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Tomasz Żuber | Contact',
	description: 'A site that shows a different ways of contact to Tomasz Żuber - email, phone, form',
}

const ContactPage = () => {
	return (
		<>
			<h1 className='text-4xl xl:text-5xl my-6 p-4 text-center'>
				Choose <span className='text-hightlight'>your</span> way to <span className='text-hightlight'>contact me</span>
			</h1>
			<FastContactSection />
			<h2 className='text-3xl xl:text-4xl mt-6 p-4 text-center'>
				Or send me <span className='text-hightlight'>a message</span>
			</h2>
			<FormContactSection />
		</>
	)
}

export default ContactPage
