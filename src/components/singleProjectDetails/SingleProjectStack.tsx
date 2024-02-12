import Wrapper from '../layout/Wrapper'
import CenteredSection from '../layout/CenteredSection'
import StackList from '../UI/StackList'
import HeadingTwo from '../UI/HeadingTwo'

import { SingleProjectIconType } from '../../types/singleProjectType'

type ComponentType = {
	technologies: SingleProjectIconType[]
}

const SingleProjectStack: React.FC<ComponentType> = ({ technologies }) => {
	return (
		<Wrapper classes='evenSection'>
			<CenteredSection>
				<HeadingTwo text='Technology' coloredText='stack' />
				<StackList stack={technologies} classes='md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6' />
			</CenteredSection>
		</Wrapper>
	)
}

export default SingleProjectStack
