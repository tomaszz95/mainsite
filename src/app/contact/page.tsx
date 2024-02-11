import ContactSection from '../../components/contactViews/ContactSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Tomasz Żuber | Contact',
	description: 'A site that shows a different ways of contact to Tomasz Żuber - email, phone, form',
}

const ContactPage = () => {
	return <ContactSection />
}

export default ContactPage
