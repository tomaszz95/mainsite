import type { Metadata } from 'next'

import ContactSection from '../../components/contactViews/ContactSection'

export const metadata: Metadata = {
	title: 'Tomasz Żuber | Contact',
	description: 'A site that shows different ways to contact Tomasz Żuber - email, phone, form',
}

const ContactPage = () => {
	return <ContactSection />
}

export default ContactPage
