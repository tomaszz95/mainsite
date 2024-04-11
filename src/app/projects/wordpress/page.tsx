import WordpressProjectsView from '../../../components/singleProjectView/WordpressProjectsView'
import { wordpressProjects } from '../../../constans/projects'

export async function generateMetadata() {
	return {
		title: `Tomasz Żuber | Wordpress sites`,
		description:
			"Portfolio projects page showcasing two distinct web projects: a polished Polish-language website for a law firm and a charming English-language online pet store. The law firm's website serves as a professional virtual business card, offering comprehensive information about legal services in a sleek, user-friendly design. Meanwhile, the online pet store features a curated selection of products for animal lovers worldwide, emphasizing a delightful shopping experience. These projects exemplify our ability to create impactful and engaging web experiences tailored to diverse audiences. Projects are created by using Wordpress and Gutenberg, also Astra themes.",
	}
}

const WordpressProjectsPage = () => {
	return <WordpressProjectsView project={wordpressProjects} />
}

export default WordpressProjectsPage
