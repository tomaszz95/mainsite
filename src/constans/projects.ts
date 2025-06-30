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
import TYPESCRIPT_ICON from '../assets/icons/typescript.png'
import RTL_ICON from '../assets/icons/ReactTL.png'
import JEST_ICON from '../assets/icons/jest.png'
import EXPRESS_ICON from '../assets/icons/express.png'
import NODE_ICON from '../assets/icons/node.png'

export const selectedProjects = [
	{
		title: 'Netflix clone',
		description:
			"Responsive web app built with Next.js, TypeScript, a touch of React Redux, and Firebase, mimicking Netflix's layout with multiple sub-pages like login/registration, profile selection, and movie/series views. It uses the TMDB database for data, lacking videos and detailed episode info.",
		technologies: ['React', 'Next.js', 'Typescript', 'Javascript', 'Firebase'],
		link: '/projects/netflix-clone',
	},
	{
		title: 'E-commerce Website',
		description:
			'Fully functional e-commerce website for electronic items, built with Next.js and TypeScript frontend, and a Node.js, Express, and Mongoose backend. The responsive app features multiple pages, including individual product sub-pages with ratings, login/register functionality, and a complete buying process up to payment.',
		technologies: ['React', 'Next.js', 'Typescript', 'Node.js', 'Express.js', 'MongoDB'],
		link: '/projects/nextpc',
	},
	{
		title: 'Law Company Page',
		description:
			'Professional landing page for a law firm built with Next.js, delivering a sleek, mobile-first design. Dynamic elements are rendered via Next.js and optimized with SEO for greater visibility.',
		technologies: ['React', 'Next.js', 'Typescript', 'Javascript', 'HTML/CSS'],
		link: '/projects/pzblawcompany',
	},
]

export const projectsList = [
	{
		title: 'NeXtPC E-commerce',
		shortDesc:
			'Fully functional e-commerce website for electronic items, built with Next.js and TypeScript frontend, and a Node.js, Express, and Mongoose backend. The responsive app features multiple pages, including product categories, individual product sub-pages with ratings, login/register functionality and a complete buying process up to payment.',
		description:
			'I would like to present my most advanced project, which is a fully functional ecommerce website selling electronic items. I created the entire project from scratch: the frontend was written in Next.js (also Typescript), the backend in Node.js using Express.js and Mongoose, also I used a MongoDB database (REST API). The page is fully responsive - for mobiles, tablets and desktops. The application contains many pages - starting with the home page through individual product categories, sub-pages with individual products, where you can rate the products, the ability to log in/register, and the entire process of buying a product up to payment (which, of course, since this is not a full-fledged application, ends when you have to pay for the product). Being logged in allows you to add products to your favorites, save your data and track products later.',
		technologies: [
			{ name: 'React', icon: REACT_ICON },
			{ name: 'Next.js', icon: NEXT_ICON },
			{ name: 'Typescript', icon: TYPESCRIPT_ICON },
			{ name: 'Javascript', icon: JAVASCRIPT_ICON },
			{ name: 'Node.js', icon: NODE_ICON },
			{ name: 'Express.js', icon: EXPRESS_ICON },
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
			'homepage, shop page, category pages, product pages, and more',
			'custom backend for managing CRUD operations (orders, login, cart, favorites, comments)',
			'REST API using MongoDB to store and manage data',
			'login/registration with user data editing',
			'full cart functionality, order handling, and checkout process',
			'ability to search products by name',
			'frontend and backend security to prevent invalid data, plus cookie support',
			'fully responsive design',
			'accessibility-friendly practices',
			'SEO-optimized structure',
			'follows core design principles',
			'custom 404 and 500 pages',
		],
	},
	{
		title: 'Netflix Clone',
		shortDesc:
			"Responsive web app built with Next.js, TypeScript, a touch of React Redux, and Firebase, mimicking Netflix's layout with multiple sub-pages like login/registration, profile selection, and movie/series views. It uses the TMDB database for data, lacking videos and detailed episode info. Users can browse movies and series by category.",
		description:
			'I would like to share with you my Netflix clone project, built using Next.js with a touch of React Redux, Firebase, and TypeScript. The app is fully responsive, working seamlessly on mobiles, tablets, and desktops. It mimics the Netflix experience with the TMDB database, though it’s less detailed—meaning no videos or in-depth episode info. The project includes numerous sub-pages, from the main view to login/registration, profile selection and editing, plus dedicated pages for series, movies, and individual titles. Since it’s not a pixel-perfect clone, I’ve used unique icons, dummy text, and a vertical layout for posters, adapting to TMDB’s API differences compared to Netflix’s horizontal design.',
		technologies: [
			{ name: 'React', icon: REACT_ICON },
			{ name: 'Next.js', icon: NEXT_ICON },
			{ name: 'Typescript', icon: TYPESCRIPT_ICON },
			{ name: 'Javascript', icon: JAVASCRIPT_ICON },
			{ name: 'Firebase', icon: FIREBASE_ICON },
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
			'main pages for guests and logged-in users (slight tweaks for kids, same API data)',
			'about 30 sub-pages, including dynamic ones with series and movie data',
			'full Netflix-style registration with device, language, and series selection',
			'user authentication (login, logout, registration, and sign-in)',
			'series and movie search by title',
			"Extra features for logged-in users (profile editing, 'watching series', browse/kids pages)",
			'custom 404 and 500 pages',
			'accessibility-friendly practices',
			'SEO-optimized structure',
			'fully responsive design',
			'firebase-powered login, logout, and authentication management',
		],
	},
	{
		title: 'Portfolio Page',
		shortDesc:
			'This portfolio site, built with Next.js, TypeScript, and Tailwind CSS, is fully responsive and SEO-optimized, featuring sub-pages for about me, contact, and projects. It includes dynamic project pages with details, GitHub links, live demos, and a downloadable resume. Over 100 unit tests using Jest and RTL ensure component reliability.',
		description:
			'Welcome! This is my portfolio page, built with Next.js, TypeScript, and Tailwind CSS for styling. The site is fully responsive across all devices and follows top SEO practices. It’s a straightforward app featuring sub-pages like About Me, Contact, and Projects, plus dynamic pages for individual projects I’ve created. You can explore details about me, my contact info, the technologies I use, and even download my resume directly from the site. The Projects section showcases my work with links to GitHub repositories, live demos, and deeper insights into each one. Plus, I’ve written over 100 unit tests of varying complexity using Jest and RTL to ensure most components work flawlessly.',
		technologies: [
			{ name: 'React', icon: REACT_ICON },
			{ name: 'Next.js', icon: NEXT_ICON },
			{ name: 'Typescript', icon: TYPESCRIPT_ICON },
			{ name: 'Javascript', icon: JAVASCRIPT_ICON },
			{ name: 'Tailwind', icon: TAILWIN_ICON },
			{ name: 'JEST', icon: JEST_ICON },
			{ name: 'React Testing Library', icon: RTL_ICON },
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
			'three sub-pages: About Me, Projects, and Contact',
			'dynamic pages featuring individual projects and their details',
			'fully functional contact form sending emails via Vercel and Formspree',
			'over 100 unit tests written with Jest and RTL for most components',
			'axios integration for form submission to my email',
			'framer Motion for site animations',
			'fully responsive design',
			'accessibility-friendly practices',
			'SEO-optimized structure',
			'custom "Not Found" page',
		],
	},
	{
		title: 'Law Company Website',
		shortDesc:
			'Professional landing page for a law firm built with Next.js, delivering a sleek, mobile-first design. Dynamic elements are rendered via Next.js and optimized with SEO for greater visibility.',
		description:
			'The website is developed using Next.js, TypeScript, and CSS Modules for styling. It’s fully responsive, featuring sub-pages with details about the law firm, its services, and contact information. Following top SEO practices, it ensures fast performance and accessibility, while dynamically showcasing legal service details for a smooth user experience. A contact form is seamlessly integrated for easy communication with the firm. Plus, the site is designed for scalability and maintainability, allowing effortless expansion with new features.',
		technologies: [
			{ name: 'React', icon: REACT_ICON },
			{ name: 'Next.js', icon: NEXT_ICON },
			{ name: 'Typescript', icon: TYPESCRIPT_ICON },
			{ name: 'Javascript', icon: JAVASCRIPT_ICON },
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
			'fully functional business card website for a respected law firm',
			'main page with key information about the firm',
			'four sub-pages: About Us, Team, Services, and Contact',
			'accessibility-friendly practices',
			'SEO-optimized structure',
			'fully responsive design',
			'custom "Not Found" page',
		],
	},
	{
		title: 'ASGeodezja Website',
		shortDesc:
			'Landing page for ASGeodezja is built with Next.js, delivering a modern, responsive design. It’s SEO-optimized and uses Next.js API routes for dynamic content delivery.',
		description:
			'The website is developed with Next.js, TypeScript, and CSS Modules for styling. It’s fully responsive, showcasing ASGeodezja’s geodetic services, company info, and contact details. Following top SEO practices, it ensures fast performance and accessibility. A dedicated services page highlights offerings like land surveying, property division, and investment support. Plus, the contact section makes it easy for clients to get in touch, while the site is designed to be scalable and ready for future updates.',
		technologies: [
			{ name: 'React', icon: REACT_ICON },
			{ name: 'Next.js', icon: NEXT_ICON },
			{ name: 'Typescript', icon: TYPESCRIPT_ICON },
			{ name: 'Javascript', icon: JAVASCRIPT_ICON },
		],
		link: 'asgeodesy',
		photos: [
			{ photo: GEODESY_PHOTO1, alt: 'Main site of geodesy company site' },
			{ photo: GEODESY_PHOTO2, alt: 'Section informations of geodesy company site' },
			{ photo: GEODESY_PHOTO3, alt: 'Our services section in services site of geodesy company site' },
			{ photo: GEODESY_PHOTO4, alt: 'Our team section in about us site of geodesy company site' },
		],
		github: 'https://github.com/tomaszz95/asgeodesy',
		live: 'https://asgeodezja.vercel.app',
		contents: [
			'fully functional website as a business card for a geodesy company in polish language',
			'main page with key information about the firm',
			'three subpages – about us, services and contact',
			'accessibility-friendly practices',
			'SEO-optimized structure',
			'fully responsive design',
			'custom "Not Found" page',
		],
	},
]
