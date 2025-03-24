import NETFLIX_PHOTO1 from '../assets/photos/netflix1.jpg'
import NETFLIX_PHOTO2 from '../assets/photos/netflix2.jpg'
import NETFLIX_PHOTO3 from '../assets/photos/netflix3.jpg'
import NETFLIX_PHOTO4 from '../assets/photos/netflix4.jpg'
import NEXTPC_PHOTO1 from '../assets/photos/nextpc1.jpg'
import NEXTPC_PHOTO2 from '../assets/photos/nextpc2.jpg'
import NEXTPC_PHOTO3 from '../assets/photos/nextpc3.jpg'
import NEXTPC_PHOTO4 from '../assets/photos/nextpc4.jpg'
import GEODESY_PHOTO1 from '../assets/photos/geodesy1.jpg'
import GEODESY_PHOTO2 from '../assets/photos/geodesy2.jpg'
import GEODESY_PHOTO3 from '../assets/photos/geodesy3.jpg'
import GEODESY_PHOTO4 from '../assets/photos/geodesy4.jpg'
import PORTFOLIO_PHOTO1 from '../assets/photos/portfolio1.jpg'
import PORTFOLIO_PHOTO2 from '../assets/photos/portfolio2.jpg'
import PORTFOLIO_PHOTO3 from '../assets/photos/portfolio3.jpg'
import PORTFOLIO_PHOTO4 from '../assets/photos/portfolio4.jpg'
import LAWCOMPANY_PHOTO1 from '../assets/photos/lawcompany1.jpg'
import LAWCOMPANY_PHOTO2 from '../assets/photos/lawcompany2.jpg'
import LAWCOMPANY_PHOTO3 from '../assets/photos/lawcompany3.jpg'
import LAWCOMPANY_PHOTO4 from '../assets/photos/lawcompany4.jpg'

import NEXT_ICON from '../assets/icons/next.png'
import REACT_ICON from '../assets/icons/react.png'
import TAILWIN_ICON from '../assets/icons/tailwind.png'
import JAVASCRIPT_ICON from '../assets/icons/javascript.png'
import MONGO_ICON from '../assets/icons/mongo.png'
import FIREBASE_ICON from '../assets/icons/firebase.png'
import HTML_ICON from '../assets/icons/html.png'
import CSS_ICON from '../assets/icons/css.png'
import GITHUB_ICON from '../assets/icons/github.png'
import TYPESCRIPT_ICON from '../assets/icons/typescript.png'
import RTL_ICON from '../assets/icons/ReactTL.png'
import JEST_ICON from '../assets/icons/jest.png'
import EXPRESS_ICON from '../assets/icons/express.png'
import MONGOOSE_ICON from '../assets/icons/mongoose.png'
import NODE_ICON from '../assets/icons/node.png'

export const selectedProjects = [
	{
		title: 'Netflix clone',
		description:
			'Is a web application designed to replicate key features of Netflix. Built using Next.js, React and TypeScript, the project showcases a responsive and functional design, offering users an engaging streaming experience.',
		technologies: ['React', 'Next.js', 'Typescript', 'Javascript', 'Firebase', 'MongoDB'],
		link: '/projects/netflix-clone',
	},
	{
		title: 'E-commerce Website',
		description:
			'NeXtPC is a fully functional online store page, simulates an e-commerce store where users can browse products, add them to their shopping cart, and proceed with checkout. The project includes both the frontend layer and the complete backend, along with seamless integration for database communication.',
		technologies: ['React', 'Next.js', 'Typescript', 'Node.js', 'Express.js', 'Mongoose'],
		link: '/projects/nextpc',
	},
	{
		title: 'Law Company Page',
		description:
			'A company website designed for a fictional law firm. Written in English, it provides detailed information about the company’s team, services, and contact options in a professional layout.',
		technologies: ['React', 'Next.js', 'Typescript', 'Javascript', 'Git/Github', 'HTML/CSS'],
		link: '/projects/pzblawcompany',
	},
]

export const projectsList = [
	{
		title: 'NeXtPC E-commerce',
		shortDesc:
			'E-commerce platform crafted with Next.js and SCSS for a responsive, fast-loading experience. Backend powered by Node.js/Express with JWT authentication and MongoDB for product and user management.',
		description:
			'I would like to present with the greatest pleasure my most advanced project, which is a fully functional ecommerce website selling electronic items. I created the entire project from scratch: the frontend was written in Next.js (also Typescript), the backend in Node.js using Express.js and Mongoose, and I used a MongoDB database (REST API). The application contains many pages - starting with the home page through individual product categories, sub-pages with individual products, where you can rate the products, the ability to log in/register, and the entire process of buying a product up to payment (which, of course, since this is not a full-fledged application, ends when you have to pay for the product). Being logged in allows you to add products to your favorites, save your data and track products later.',
		technologies: [
			{ name: 'Next.js', icon: NEXT_ICON },
			{ name: 'React', icon: REACT_ICON },
			{ name: 'Typescript', icon: TYPESCRIPT_ICON },
			{ name: 'Javascript', icon: JAVASCRIPT_ICON },
			{ name: 'Node.js', icon: NODE_ICON },
			{ name: 'Express.js', icon: EXPRESS_ICON },
			{ name: 'Mongoose', icon: MONGOOSE_ICON },
			{ name: 'MongoDB', icon: MONGO_ICON },
		],
		link: 'nextpc',
		photos: [
			{ photo: NEXTPC_PHOTO1, alt: 'Homepage when the user is not logged in on the nextpc shop app' },
			{ photo: NEXTPC_PHOTO2, alt: 'Shop site in laptops category on the nextpc shop app' },
			{ photo: NEXTPC_PHOTO3, alt: 'View of the single product in nextpc shop app' },
			{ photo: NEXTPC_PHOTO4, alt: 'View of the cart in nextpc shop app' },
		],
		github: 'https://github.com/tomaszz95/ecommerce',
		live: 'https://nextpc.vercel.app/',
		contents: [
			'homepage, shop page, category page, product page and many, many more',
			'self-written backend to handle CRUD operations of order, login, cart, favorite products, comments',
			'REST API connection with MongoDB to collect and store data',
			'supports the login/registration process and subsequent editing of user data',
			'full support for adding the product to the cart, handling the order, collecting data',
			'possibility to search for products by name',
			'security on the frontend as well as the backend so that the user cannot enter incorrect data',
			'fully responsive design',
			'accessibility-friendly practices',
			'SEO-optimized structure',

			'custom 404 and 500 page',
		],
	},
	{
		title: 'Netflix Clone',
		shortDesc:
			'Netflix replica developed with Next.js and SCSS for a sleek, dynamic UI. Movie data fetched from TMDB API with Axios, featuring category filtering and smooth animations.',
		description:
			"I present to you my Netflix clone project. The project is created in Next.js using a small amount of React Redux, Firebase and written in Typescript. The page is fully responsive - for mobiles, tablets and desktops. The app is 'cloning' the Netflix site - I used the TMDB database, which is not as detailed as the Netflix one, this means no videos, no detailed information about individual episodes of series or other detailed data. The application contains many sub-pages, starting from the main view, through the whole process of logging in and registering, selecting a profile and editing it, up to the main page of series, movies and individual sub-pages. Due to the nature of the app I used different icons, used some dummy texts and this is not a 'pixel perfect' clone - mainly due to a different api, which dictates a different placement of for example series and movie posters (netflix has them horizontally, tmdb vertically, also another data).",
		technologies: [
			{ name: 'React', icon: REACT_ICON },
			{ name: 'Next.js', icon: NEXT_ICON },
			{ name: 'Typescript', icon: TYPESCRIPT_ICON },
			{ name: 'Javascript', icon: JAVASCRIPT_ICON },
			{ name: 'Firebase', icon: FIREBASE_ICON },
			{ name: 'HTML', icon: HTML_ICON },
			{ name: 'CSS', icon: CSS_ICON },
			{ name: 'Git/Github', icon: GITHUB_ICON },
		],
		link: 'netflix-clone',
		photos: [
			{ photo: NETFLIX_PHOTO1, alt: 'Homepage when the user is not logged in on the netflix clone site' },
			{ photo: NETFLIX_PHOTO2, alt: 'Main site when the user is logged in on the netflix clone site' },
			{ photo: NETFLIX_PHOTO3, alt: 'View of the popular and trending series site on the netflix clone site' },
			{ photo: NETFLIX_PHOTO4, alt: 'View of the editing profile site on the netflix clone site' },
		],
		github: 'https://github.com/tomaszz95/Netflixclone',
		live: 'https://netflixcloneen.vercel.app/',
		contents: [
			'main pages for guests and for logged-in users (with slight differences for children, but data remains the same due to the API)',
			'around 30 different subpages (including the dynamic ones with series and films data)',
			'full Netflix registration process (choosing devices, languages, series)',
			'user authentication features (login, sign-in, logout, register)',
			'series/movie searching by title',
			"when a user is logged in, additional options are available (profile editing, 'watching series', browse / kids page)",
			'custom 404 and 500 pages',
			'accessibility practices',
			'SEO practices',
			'fully responsive design',
			'using firebase to log in / log out and auth management',
		],
	},
	{
		title: 'Portfolio Page',
		shortDesc:
			'Personal portfolio site built with Next.js and SCSS to showcase projects and skills. Dynamic content rendered with Next.js features, optimized for responsiveness and speed. Deployed on Vercel for a clean, live presentation.',
		description:
			"The application is made in Next.js, written in Typescript and using Tailwind for styling - page is fully responsive and with best SEO practices. It's a simple site with several sub-pages (about me, contact and projects), as well as dynamic pages for single created project. On the site you can read some information about me, how to contact me, what technologies I work in, and also download my resume. In addition, on the projects sub-page there are projects created by me, as well as the opportunity to read more information about them, a link to github and live version. Also more than 100 unit tests of varying complexity have been written for the website using JEST and RTL to check the correct behaviour of most components.",
		technologies: [
			{ name: 'React', icon: REACT_ICON },
			{ name: 'Next.js', icon: NEXT_ICON },
			{ name: 'Typescript', icon: TYPESCRIPT_ICON },
			{ name: 'Javascript', icon: JAVASCRIPT_ICON },
			{ name: 'Tailwind', icon: TAILWIN_ICON },
			{ name: 'JEST', icon: JEST_ICON },
			{ name: 'React Testing Library', icon: RTL_ICON },
			{ name: 'Git/Github', icon: GITHUB_ICON },
		],
		link: 'my-portfolio',
		photos: [
			{ photo: PORTFOLIO_PHOTO1, alt: 'Main site of my portfolio page' },
			{ photo: PORTFOLIO_PHOTO2, alt: 'Contact site of the portfolio page' },
			{ photo: PORTFOLIO_PHOTO3, alt: 'Technologies that I have learned on my portfolio page' },
			{ photo: PORTFOLIO_PHOTO4, alt: 'Projects site on my portfolio page' },
		],
		github: 'https://github.com/tomaszz95/mainsite',
		live: 'https://tomaszzportfolio.vercel.app/',
		contents: [
			'main pages with basic info about me',
			'three subpages – about, projects and contact, along with dynamic pages offering more detailed project information',
			'framer motion package used to animate the site',
			'site is tested using JEST and RTL - more than 100 unit tests are witten for most components',
			'custom `not found` page',
			'accessibility practices',
			'SEO practices',
			'fully responsive design',
		],
	},
	{
		title: 'Law Company Website',
		shortDesc:
			'Professional landing page developed with Next.js and SCSS for a polished, mobile-first layout. Dynamic elements rendered with Next.js, enhanced with SEO for better visibility.',
		description:
			'The application is built with Next.js, written in TypeScript, and styled using CSS Modules. It is a fully responsive website with multiple subpages, including information about the law firm, services offered, and contact details. The site follows best SEO practices, ensuring fast performance and accessibility, while dynamically rendering legal service details to provide a seamless user experience. A contact form is integrated to facilitate easy communication with the firm. Additionally, the website is optimized for scalability and maintainability, making it easy to extend with new features. ',
		technologies: [
			{ name: 'React', icon: REACT_ICON },
			{ name: 'Next.js', icon: NEXT_ICON },
			{ name: 'Typescript', icon: TYPESCRIPT_ICON },
			{ name: 'Javascript', icon: JAVASCRIPT_ICON },
			{ name: 'HTML', icon: HTML_ICON },
			{ name: 'CSS', icon: CSS_ICON },
			{ name: 'Git/Github', icon: GITHUB_ICON },
		],
		link: 'pzblawcompany',
		photos: [
			{ photo: LAWCOMPANY_PHOTO1, alt: 'Main site of law company site' },
			{ photo: LAWCOMPANY_PHOTO2, alt: 'Section why our company of law company site' },
			{ photo: LAWCOMPANY_PHOTO3, alt: 'Meet our team section in team site of law company site' },
			{ photo: LAWCOMPANY_PHOTO4, alt: 'What do we do section in services site of law company site' },
		],
		github: 'https://github.com/tomaszz95/pzblawcompany',
		live: 'https://pzblawcompany.vercel.app/',
		contents: [
			'fully functional website as a business card for a respected law firm',
			'main page with some major informations',
			'four subpages – about us, team, services and contact',
			'accessibility practices',
			'SEO practices',
			'fully responsive design',
			'custom `not found` page',
		],
	},
	{
		title: 'ASGeodezja Website',
		shortDesc:
			'Landing page created with Next.js and SCSS for a modern, responsive design. SEO optimized and powered by Next.js API routes for dynamic content delivery.',
		description:
			"The application is built with Next.js, written in TypeScript, and styled using CSS Modules. It is a fully responsive website that presents ASGeodezja’s geodetic services, company details, and contact information. The site follows best SEO practices, ensuring high performance and accessibility. A dedicated services page details the firm's offerings, including land surveying, property division, and investment support. Additionally, the contact section allows clients to easily reach out, while the website remains scalable and adaptable for future updates.",
		technologies: [
			{ name: 'React', icon: REACT_ICON },
			{ name: 'Next.js', icon: NEXT_ICON },
			{ name: 'Typescript', icon: TYPESCRIPT_ICON },
			{ name: 'Javascript', icon: JAVASCRIPT_ICON },
			{ name: 'HTML', icon: HTML_ICON },
			{ name: 'CSS', icon: CSS_ICON },
			{ name: 'Git/Github', icon: GITHUB_ICON },
		],
		link: 'asgeodesy',
		photos: [
			{ photo: GEODESY_PHOTO1, alt: 'Main site of geodesy company site' },
			{ photo: GEODESY_PHOTO2, alt: 'Section informations of geodesy company site' },
			{ photo: GEODESY_PHOTO3, alt: 'Our services section in services site of geodesy company site' },
			{ photo: GEODESY_PHOTO4, alt: 'Our team section in about us site of geodesy company site' },
		],
		github: 'https://github.com/tomaszz95/asgeodesy',
		live: 'https://asgeodezja.vercel.app/',
		contents: [
			'fully functional website as a business card for a geodesy company in polish language',
			'main page with some major informations',
			'three subpages – about us, services and contact',
			'accessibility practices',
			'SEO practices',
			'fully responsive design',
			'custom `not found` page',
		],
	},
]
