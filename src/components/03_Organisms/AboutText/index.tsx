import { useLanguage } from '@hooks/languageHook'

const AboutText: React.FC = () => {
	const { language } = useLanguage()

	return (
		<div
			className='w-full h-full mx-auto z-0 bg-[rgba(0,0,0,0.8)] mb-12 mt-1 text-white flex flex-col items-center gap-2 justify-center
		lg:gap-0 lg:mx-0 lg:mb-0'
		>
			<h1 className='font-bold text-3xl animate-bounce text-yellow-500'>
				{language.AboutTitle}
			</h1>

			<section className='text-lg text-center mx-2 lg:ml-4'>
				{language.AboutInfo.split('\n').map((paragraph, index) => (
					<p key={index}>{paragraph.trim()}</p>
				))}
			</section>
		</div>
	)
}

export { AboutText }
