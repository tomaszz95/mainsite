import NETFLIX_PHOTO1 from '../assets/photos/netflix1.jpg'
import NETFLIX_PHOTO2 from '../assets/photos/netflix2.jpg'
import NETFLIX_PHOTO3 from '../assets/photos/netflix3.jpg'
import NETFLIX_PHOTO4 from '../assets/photos/netflix4.jpg'
import GEODESY_PHOTO1 from '../assets/photos/geodesy1.jpg'
import GEODESY_PHOTO2 from '../assets/photos/geodesy2.jpg'
import GEODESY_PHOTO3 from '../assets/photos/geodesy3.jpg'
import GEODESY_PHOTO4 from '../assets/photos/geodesy4.jpg'
import GRADEBOOK_PHOTO1 from '../assets/photos/gradebook1.jpg'
import GRADEBOOK_PHOTO2 from '../assets/photos/gradebook2.jpg'
import GRADEBOOK_PHOTO3 from '../assets/photos/gradebook3.jpg'
import GRADEBOOK_PHOTO4 from '../assets/photos/gradebook4.jpg'
import PORTFOLIO_PHOTO1 from '../assets/photos/portfolio1.jpg'
import PORTFOLIO_PHOTO2 from '../assets/photos/portfolio2.jpg'
import PORTFOLIO_PHOTO3 from '../assets/photos/portfolio3.jpg'
import PORTFOLIO_PHOTO4 from '../assets/photos/portfolio4.jpg'
import TOOLKIT_PHOTO1 from '../assets/photos/toolkit1.jpg'
import TOOLKIT_PHOTO2 from '../assets/photos/toolkit2.jpg'
import TOOLKIT_PHOTO3 from '../assets/photos/toolkit3.jpg'
import TOOLKIT_PHOTO4 from '../assets/photos/toolkit4.jpg'
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
			"An application resembling an electronic gradebook. It enables you to check your schedule, grades, statistics, and from the teacher's side to add news or grades for students",
		technologies: ['NextJS', 'React', 'Typescript', 'Firebase', 'Git/Github', 'SEO'],
		link: '/projects/gradebook',
	},
	{
		title: 'Netflix clone',
		description:
			'A fully responsive website, which is an advanced clone of the popular streaming service Netflix, with many of its features. This is the most advanced project in my portfolio',
		technologies: ['NextJS', 'Typescript', 'Firebase', 'MongoDB', 'RWD', 'SEO'],
		link: '/projects/netflix-clone',
	},
	{
		title: 'Surveying website',
		description:
			'This is a fully functional and responsive website for a surveying company – integrating best practices for SEO, accessibility, and code quality',
		technologies: ['HTML', 'CSS/SCSS', 'GULP', 'Git/Github', 'SEO', 'RWD'],
		link: '/projects/asgeodesy',
	},
]

export const projectsList = [
	{
		title: 'Netflix Clone',
		shortDesc:
			'A website that is a clone of Netflix – it is fully responsive, with SEO and accessibility practices and with many features from the original streaming site.',
		description:
			'The project is created in NextJS (13) using a small amount of React Redux, Firebase and written in Typescript. The page is fully responsive – for mobiles, tablets and desktops. The app is cloning the Netflix site – I used the TMDB database, which is not as detailed as the Netflix one. Therefore, detailed data such as videos and individual episode information is unavailable. The application contains various sub-pages, including the main view, login and registration processes, selecting a profile and editing it (not all properties can be edited), series and movies main pages and individual sub-pages. Due to the nature of the app, I used different icons, some dummy texts and it is not a pixel-perfect clone – mainly because of the different API, which dictates a different placement of for example series and movie posters.',
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
		photos: [
			{ photo: NETFLIX_PHOTO1, alt: 'Homepage when user is not logged in of netflix clone site' },
			{ photo: NETFLIX_PHOTO2, alt: 'Main site when user is logged in on==of netflix clone site' },
			{ photo: NETFLIX_PHOTO3, alt: 'View of popular and trending series site of netflix clone site' },
			{ photo: NETFLIX_PHOTO4, alt: 'View of edit user profile site of netflix clone site' },
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
			'using LocalStorage to store certain  auth data (no data is collected in this demo)',
			'the project is built with about 250 components (including custom hooks, API fetching, helpers)',
		],
	},
	{
		title: 'Portfolio Page',
		shortDesc:
			'A simple website briefly introducing me, the projects I have created and providing methods to contact me, along with the option to download my CV.',
		description:
			'The page you are currently on serves as my portfolio and personal introduction. The site includes information about me, my projects and ways to contact me. It is not an overly complicated application, but clean, clear and comprehensive. The site is created in NextJs (14) using Typescript and Tailwind. Framer motion is a package used to animate the site. It consists of a homepage and three main subpages: about me, projects and contact. Additionally, each project has a separate subpage where you can find more detailed information and photos.',
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
		photos: [
			{ photo: PORTFOLIO_PHOTO1, alt: 'Main site of my portfolio page' },
			{ photo: PORTFOLIO_PHOTO2, alt: 'Contact site of portfolio page' },
			{ photo: PORTFOLIO_PHOTO3, alt: 'Technologies that i have learned of my portfolio page' },
			{ photo: PORTFOLIO_PHOTO4, alt: 'Projects site of my portfolio page' },
		],
		github: 'https://github.com/tomaszz95/mainsite',
		live: 'https://tomaszzportfolio.vercel.app/',
		contents: [
			'main pages with basic info about me',
			'three subpages – about, projects and contact, along with dynamic pages offering more detailed project information',
			'framer motion package used to animate the site',
			'custom `not found` page',
			'accessibility practices',
			'SEO practices',
			'fully responsive design',
		],
	},
	{
		title: 'Gradebook',
		shortDesc: 'An application that partly mimics the functioning of an electronic gradebook.',
		description:
			'You can log in as either a teacher or a student. When you are logged as a student, you can check your timetable, grades, grade-related statistics, and information about other students/classes. As a teacher, you can also add news, assign grades to individual students and view statistics for the entire school (only two classes are available). It integrates frontend with backend and retrieving data from databases.',
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
		photos: [
			{ photo: GRADEBOOK_PHOTO1, alt: 'Login site of gradebook site' },
			{ photo: GRADEBOOK_PHOTO2, alt: 'News page when logged as a student of gradebook site' },
			{ photo: GRADEBOOK_PHOTO3, alt: 'Add new grade when logged as a teacher of gradebook site' },
			{ photo: GRADEBOOK_PHOTO4, alt: 'Statistics page when logged as a teacher of gradebook site' },
		],
		github: 'https://github.com/tomaszz95/gradebook',
		live: 'https://gradebookk.vercel.app/',
		contents: [
			'login page with full Firebase support (log in, log out, check if the user is logged in)',
			'news page with some basic non-deletable dummy news – students can only read news, while teachers can add more',
			'timetable plans for students and teachers',
			'grade section where students can check their grades from 2 semesters – teachers can add grades for subjects they teach',
			'statistics page showing student averages in each subject and class averages for students; teachers can view averages for each class and the entire school for comparison',
			'accessibility practices',
			'using firebase to log in / log out and auth management',
			'using MongoDB to store certain database information',
			'using LocalStorage to store certain auth data',
			'using dummy data in the database',
		],
	},
	{
		title: 'Toolkit',
		shortDesc:
			'A website featuring the most popular frontend projects written in React – Calculator, Todo List, Note App, Weather App and Finances Manager combined into one website.',
		description:
			'The page includes 5 applications: ToDo List, Note App, Finances Manager, Calculator and Weather App. The project is created in React using Create React App, React Router and React Redux. The sites are responsive, using Local Storage to store information (like tasks, notes etc.) and adapted in terms of accessibility.',
		technologies: [
			{ name: 'React', icon: REACT_ICON },
			{ name: 'React Redux', icon: REDUX_ICON },
			{ name: 'CSS', icon: CSS_ICON },
			{ name: 'Git/Github', icon: GITHUB_ICON },
			{ name: 'SEO', icon: SEO_ICON },
			{ name: 'RWD', icon: RWD_ICON },
		],
		link: 'toolkit',
		photos: [
			{ photo: TOOLKIT_PHOTO1, alt: 'Task application of toolkit page' },
			{ photo: TOOLKIT_PHOTO2, alt: 'Finances manager of toolkit page' },
			{ photo: TOOLKIT_PHOTO3, alt: 'Weather app of toolkit page' },
			{ photo: TOOLKIT_PHOTO4, alt: 'Note app of toolkit page' },
		],
		github: 'https://github.com/tomaszz95/toolkit',
		live: 'https://toolkiit.netlify.app/',
		contents: [
			'five fully functional sites with five different apps',
			'ToDo List: add, mark as completed, delete, and edit tasks',
			'Note App: add, edit, and delete notes',
			'Finances Manager: add transactions, delete, and calculate total spending/savings',
			'simple calculator app with error handling',
			'Weather App providing detailed weather information for searched cities',
			'fully responsive design',
			'accessibility practices',
			'light/dark themes option',
		],
	},
	{
		title: 'Surveying website',
		shortDesc: 'A simple, fully functional, and responsive website for a surveying company.',
		description:
			'This is my first website, that can be a site for surveying company. It includes good practices for SEO, accessibility, cleanliness and code quality. The site is simple, contains all the information a client might need, presented tidily. The design is based on other surveying websites.',
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
		photos: [
			{ photo: GEODESY_PHOTO1, alt: 'Homepage of surveying site' },
			{ photo: GEODESY_PHOTO2, alt: 'Additional info about company of surveying site' },
			{ photo: GEODESY_PHOTO3, alt: 'Services provided of surveying site' },
			{ photo: GEODESY_PHOTO4, alt: 'Contact page of surveying site' },
		],
		github: 'https://github.com/tomaszz95/geodesy-site',
		live: 'https://asgeodesy.netlify.app/',
		contents: [
			'main site and three pages (services, about us and contact)',
			'custom 404 page and redirects',
			'fully responsive design',
			'accessibility practices',
			'SEO practices',
			'preservation of basic design requirements',
		],
	},
]
