import { ChangeEvent, FormEvent, useState } from 'react'
import { useAuthentication } from '../../../hooks/authenticationHook'

const defaultState = {
	email: '',
	password: ''
}

const LoginForm = () => {
	const { signIn } = useAuthentication()
	const [allValues, setAllValues] = useState(defaultState)

	const formSubmitted = (e: FormEvent) => {
		e.preventDefault()
		return signIn(allValues)
	}

	const inputChanges = (e: ChangeEvent<HTMLInputElement>) => {
		return setAllValues(prevState => ({
			...prevState,
			[e.target.name]: [e.target.value]
		}))
	}

	return (
		<div
			className='w-full h-full mx-auto z-10 text-white flex flex-col items-center font-pushster justify-center 
                bg-[rgba(0,0,0,0.5)] 
                  lg:w-full lg:h-full '
		>
			<h1 className='text-2xl text-yellow-500 mb-3'>Login</h1>

			<form
				onSubmit={e => formSubmitted(e)}
				className='flex flex-col items-center w-[90%] mx-auto'
			>
				<label className='flex mt-2' htmlFor='email'>
					<span className='text-lg mx-1'>Email:</span>

					<input
						className='text-lg w-full bg-transparent border-2 rounded-md outline-none'
						type='email'
						name='email'
						onChange={e => inputChanges(e)}
						value={allValues.email}
						placeholder='Your e-mail...'
					/>
				</label>

				<label className='flex text-lg mt-2 ' htmlFor='password'>
					<span className='text-lg mx-1'>Password:</span>

					<input
						className='text-lg w-full bg-transparent border-2 rounded-md outline-none'
						type='password'
						name='password'
						onChange={e => inputChanges(e)}
						value={allValues.password}
						placeholder='Your password...'
					/>
				</label>

				<button
					className='px-10 py-2 my-7 border-2 border-white text-xl rounded-lg 
                    hover:text-yellow-500 hover:border-yellow-500'
					type='submit'
				>
					Send
				</button>
			</form>
		</div>
	)
}

export { LoginForm }
