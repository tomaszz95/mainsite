import Link from 'next/link'

type ComponentType = {
	linkHref: string
	linkName: string
	setIsNavOpen: (value: boolean) => void
}

const NavLink: React.FC<ComponentType> = ({ linkHref, linkName, setIsNavOpen }) => {
	return (
		<Link href={linkHref} className='hover:text-hightlight duration-300 lg:p-3' onClick={() => setIsNavOpen(false)}>
			{linkName}
		</Link>
	)
}

export default NavLink
