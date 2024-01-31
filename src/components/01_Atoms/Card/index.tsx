import { ICard } from '@dto/Card'

const Card: React.FC<ICard> = ({ icon, name }) => {
	return (
		<div className='flex items-center  justify-center w-16 h-14 flipCard lg:w-14 lg:h-10 xl:w-16 xl:h-14'>
			<div className='flex flex-col items-center w-full h-full relative flipCardInner'>
				<div className=' border-2 border-white w-full h-full flex items-center justify-center absolute backfaceInvisible'>
					<i className='text-5xl lg:text-2xl xl:text-5xl'>{icon}</i>
				</div>

				<div className=' flex items-center justify-center h-full w-full absolute flipCardBack backfaceInvisible'>
					<p className='text-xl lg:text-sm xl:text-xl text-center text-yellow-500'>
						{name}
					</p>
				</div>
			</div>
		</div>
	)
}

export { Card }
