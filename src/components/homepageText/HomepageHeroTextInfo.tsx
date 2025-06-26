import Image from 'next/image'

import { homepageWords } from '../../constans/homepageTexts'

const HomepageHeroTextInfo = () => {
	return (
		<div className='hero-text'>
			<h1>
				Shaping{' '}
				<span className='slide'>
					<span className='wrapper'>
						{homepageWords.map((word, index) => (
							<span key={`${word.text}${index}`} className='flex items-center md:gap-3 gap-1 pb-2'>
								<Image
									src={word.img}
									alt={word.text}
									width={30}
									height={30}
									className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full'
								/>
								<span className='text-hightlight'>{word.text}</span>
							</span>
						))}
					</span>
				</span>
			</h1>

			<h1>into Real Projects</h1>
			<h1>that Deliver Results</h1>
		</div>
	)
}

export default HomepageHeroTextInfo
