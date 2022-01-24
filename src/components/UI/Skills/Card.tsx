interface ICard {
	icon: JSX.Element
	name: string
}

const Card = ({ icon, name }: ICard) => {
	return (
		<div className='flex items-center mx-auto justify-center w-full h-full'>
			<div className='flex flex-col items-center w-full h-full relative animateSkill'>
				<div className='border-2 border-white'>
					<i className='text-5xl'>{icon}</i>
				</div>
				<div
					className='flex items-center justify-center h-full 
					 absolute top-0 opacity-0'
				>
					<p className='text-xl text-center font-pushster text-yellow-500'>
						{name}
					</p>
				</div>
			</div>
		</div>
	)
}

export { Card }
