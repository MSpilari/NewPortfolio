interface ICard {
	icon: JSX.Element
	name: string
}

const Card: React.FC<ICard> = ({ icon, name }) => {
	return (
		<div className='flex items-center mx-auto justify-center w-16 h-14 flipCard'>
			<div className='flex flex-col items-center w-full h-full relative flipCardInner'>
				<div className=' border-2 border-white w-full h-full flex items-center justify-center absolute backfaceInvisible'>
					<i className='text-5xl'>{icon}</i>
				</div>

				<div className=' flex items-center justify-center h-full w-full absolute flipCardBack backfaceInvisible'>
					<p className='text-xl text-center text-yellow-500'>{name}</p>
				</div>
			</div>
		</div>
	)
}

export { Card }
