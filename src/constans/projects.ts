import NETFLIX_PHOTO1 from '../assets/photos/netflix1.jpg'
import NETFLIX_PHOTO2 from '../assets/photos/netflix2.jpg'
import NETFLIX_PHOTO3 from '../assets/photos/netflix3.jpg'
import GEODESY_PHOTO1 from '../assets/photos/geodesy1.jpg'
import GEODESY_PHOTO2 from '../assets/photos/geodesy2.jpg'
import GEODESY_PHOTO3 from '../assets/photos/geodesy2.jpg'
import GRADEBOOK_PHOTO1 from '../assets/photos/gradebook1.jpg'
import GRADEBOOK_PHOTO2 from '../assets/photos/gradebook2.jpg'
import GRADEBOOK_PHOTO3 from '../assets/photos/gradebook3.jpg'
import PORTFOLIO_PHOTO1 from '../assets/photos/portfolio1.jpg'
import PORTFOLIO_PHOTO2 from '../assets/photos/portfolio2.jpg'
import PORTFOLIO_PHOTO3 from '../assets/photos/portfolio3.jpg'
import TOOLKIT_PHOTO1 from '../assets/photos/toolkit1.jpg'
import TOOLKIT_PHOTO2 from '../assets/photos/toolkit2.jpg'
import TOOLKIT_PHOTO3 from '../assets/photos/toolkit3.jpg'
import NEXT_ICON from '../assets/icons/next.png'
import REACT_ICON from '../assets/icons/react.png'
import TAILWIN_ICON from '../assets/icons/tailwind.png'
import JAVASCRIPT_ICON from '../assets/icons/javascript.png'
import MONGO_ICON from '../assets/icons/mongo.png'
import FIREBASE_ICON from '../assets/icons/firebase.png'
import HTML_ICON from '../assets/icons/html.png'
import CSS_ICON from '../assets/icons/css.png'
import SEO_ICON from '../assets/icons/seo.png'
import RWD_ICON from '../assets/icons/rwd.png'
import GITHUB_ICON from '../assets/icons/github.png'
import TYPESCRIPT_ICON from '../assets/icons/typescript.png'
import GULP_ICON from '../assets/icons/gulp.png'
import REDUX_ICON from '../assets/icons/redux.png'

export const selectedProjects = [
	{
		title: 'Gradebook',
		description:
			"An application that partially mimics the operation of an electronic gradebook. It allows you to check your schedule, your grades, statistics, and from the teacher's side to add news or new grades to a student.",
		technologies: ['NextJS', 'React', 'Typescript', 'Firebase', 'Git/Github', 'SEO'],
		link: 'https://gradebookk.vercel.app/',
	},
	{
		title: 'Netflix clone',
		description:
			'Fully responsive website, which is an advanced clone of the popular streaming service Netflix, with many of its features. This is the most advanced project in my portfolio.',
		technologies: ['NextJS', 'Typescript', 'Firebase', 'MongoDB', 'RWD', 'SEO'],
		link: 'https://netflixcloneen.vercel.app/',
	},
	{
		title: 'Surveying website',
		description:
			'This is a fully functional and responsive website for a surveying company - incorporating good practices for SEO, accessibility, and cleanliness and quality of written code.',
		technologies: ['HTML', 'CSS/SCSS', 'GULP', 'Git/Github', 'SEO', 'RWD'],
		link: 'https://asgeodesy.netlify.app/',
	},
]

export const projectsList = [
	{
		title: 'Netflix Clone',
		shortDesc:
			'A website that is a clone of Netflix – it is fully responsive, with SEO and accessibility practices and with many utilities taken from the original streaming site',
		description:
			'The project is created in NextJS (13) using a small amount of React Redux, Firebase and written in Typescript. The page is fully responsive - for mobiles, tablets and desktops. The app is cloning the Netflix site - I used the TMDB database, which is not as detailed as the Netflix one, this means no videos, no detailed information about individual episodes of series or other detailed data. The application contains many sub-pages, starting from the main view, through the whole process of logging in and registering, selecting a profile and editing it (not all properties can be edited), up to the main page of series, movies and individual sub-pages. Due to the nature of the app I used different icons, used some dummy texts and this is not a pixel perfect clone - mainly due to a different api, which dictates a different placement of for example series and movie posters.',
		technologies: [
			{ name: 'NextJS', icon: NEXT_ICON },
			{ name: 'React', icon: REACT_ICON },
			{ name: 'Typescript', icon: TYPESCRIPT_ICON },
			{ name: 'Firebase', icon: FIREBASE_ICON },
			{ name: 'CSS', icon: CSS_ICON },
			{ name: 'Git/Github', icon: GITHUB_ICON },
			{ name: 'SEO', icon: SEO_ICON },
			{ name: 'RWD', icon: RWD_ICON },
		],
		link: 'netflix-clone',
		photos: [NETFLIX_PHOTO1, NETFLIX_PHOTO2, NETFLIX_PHOTO3],
		github: 'https://github.com/tomaszz95/Netflixclone',
		live: 'https://netflixcloneen.vercel.app/',
	},
	{
		title: 'Portfolio Page',
		shortDesc:
			'A simple website briefly describing me, the projects I have created and how to contact me, as well as allowing people to download my CV',
		description:
			'The page you are currently on - my portfolio and introduction of my person. The site includes some information about me, the projects I have created and possible ways to contact me. It is not very complicated application, but clean, clear and fulfilling. The site is created in NextJs (14) using Typescript and Tailwind. It contains Homapage and three main subpages for about me, projects and contact. Additionally, you can read more information and see more photos about each project I created on a separate subpage.',
		technologies: [
			{ name: 'NextJS', icon: NEXT_ICON },
			{ name: 'React', icon: REACT_ICON },
			{ name: 'Typescript', icon: TYPESCRIPT_ICON },
			{ name: 'Tailwind', icon: TAILWIN_ICON },
			{ name: 'Git/Github', icon: GITHUB_ICON },
			{ name: 'SEO', icon: SEO_ICON },
			{ name: 'RWD', icon: RWD_ICON },
		],
		link: 'my-portfolio',
		photos: [PORTFOLIO_PHOTO1, PORTFOLIO_PHOTO2, PORTFOLIO_PHOTO3],
		github: 'https://github.com/tomaszz95/mainsite',
		live: '',
	},
	{
		title: 'Gradebook',
		shortDesc: 'An application that partially mimics the operation of an electronic gradebook',
		description:
			'You can log in to app as a teacher or as a student. When you are logged as a student you can check your timetable, your grades, statistics in relation to your grades and other students/classes. As a teacher, you can also add news, add grades to individual students, also check statistics off whole school (only two classes are available). It combines frontend with backend and retrieving data from databases. ',
		technologies: [
			{ name: 'NextJS', icon: NEXT_ICON },
			{ name: 'React', icon: REACT_ICON },
			{ name: 'Typescript', icon: TYPESCRIPT_ICON },
			{ name: 'Firebase', icon: FIREBASE_ICON },
			{ name: 'MongoDB', icon: MONGO_ICON },
			{ name: 'CSS', icon: CSS_ICON },
			{ name: 'Git/Github', icon: GITHUB_ICON },
			{ name: 'SEO', icon: SEO_ICON },
		],
		link: 'gradebook',
		photos: [GRADEBOOK_PHOTO1, GRADEBOOK_PHOTO2, GRADEBOOK_PHOTO3],
		github: 'https://github.com/tomaszz95/gradebook',
		live: 'https://gradebookk.vercel.app/',
	},
	{
		title: 'Toolkit',
		shortDesc:
			'A website with the most popular frontend projects written in React - Calculator, Todo List, Note App, Weather App and Finances Manager combined in one website',
		description:
			'The page includes 5 applications: ToDo List, Note App, Finances Manager, Calculator and Weather App. The project is created in React using Create React App, React Router and React Redux. The sites are responsive, using Local Storage to contain informations (like tasks, notes etc.) and adapted in terms of accessibility.',
		technologies: [
			{ name: 'React', icon: REACT_ICON },
			{ name: 'React Redux', icon: REDUX_ICON },
			{ name: 'CSS', icon: CSS_ICON },
			{ name: 'Git/Github', icon: GITHUB_ICON },
			{ name: 'SEO', icon: SEO_ICON },
			{ name: 'RWD', icon: RWD_ICON },
		],
		link: 'toolkit',
		photos: [TOOLKIT_PHOTO2, TOOLKIT_PHOTO2, TOOLKIT_PHOTO3],
		github: 'https://github.com/tomaszz95/toolkit',
		live: 'https://toolkiit.netlify.app/',
	},
	{
		title: 'Surveying website',
		shortDesc: 'A simply fully functional and responsive website for a surveying company',
		description:
			'My first created simply website, that can be a site for surveying company, App incorporating good practices for SEO, accessibility, cleanliness and quality of written code. Site is simple, containts all information that client might seek created in a clean way. Also is designed by my based of other surveying websites.',
		technologies: [
			{ name: 'HTML', icon: HTML_ICON },
			{ name: 'CSS', icon: CSS_ICON },
			{ name: 'Javascript', icon: JAVASCRIPT_ICON },
			{ name: 'GULP', icon: GULP_ICON },
			{ name: 'Git/Github', icon: GITHUB_ICON },
			{ name: 'SEO', icon: SEO_ICON },
			{ name: 'RWD', icon: RWD_ICON },
		],
		link: 'asgeodesy',
		photos: [GEODESY_PHOTO1, GEODESY_PHOTO2, GEODESY_PHOTO3],
		github: 'https://github.com/tomaszz95/geodesy-site',
		live: 'https://asgeodesy.netlify.app/',
	},
]
