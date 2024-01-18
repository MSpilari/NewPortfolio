'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuthentication } from '@hooks/authenticationHook'

const formSchema = z.object({
	email: z.string().min(1, 'Email is required !'),
	password: z.string().min(1, 'Password is required !')
})

type FormType = z.infer<typeof formSchema>

const LoginForm = () => {
	const { signIn, userInfo } = useAuthentication()
	const {
		formState: { errors },
		handleSubmit,
		register,
		reset
	} = useForm<FormType>({ resolver: zodResolver(formSchema) })

	const formSubmitted = async (data: FormType) => {
		signIn(data)
		reset()
	}

	return (
		<div className='w-full h-full mx-auto z-10 text-white flex flex-col items-center justify-center bg-[rgba(0,0,0,0.5)] lg:w-full lg:h-full '>
			<h1 className='text-2xl text-yellow-500 mb-3'>Login</h1>
			{userInfo === false && (
				<span className='text-red-600'>
					{' '}
					Unauthorized ! Email/Password incorrect
				</span>
			)}
			<form
				onSubmit={handleSubmit(formSubmitted)}
				className='flex flex-col items-center w-[90%] mx-auto'
			>
				<label className='flex mt-2' htmlFor='email'>
					<span className='text-lg mx-1'>Email:</span>

					<input
						className={`text-lg w-full bg-transparent border-2 rounded-md outline-none ${
							errors.email && 'border-red-600'
						}`}
						{...register('email')}
					/>
				</label>
				{errors.email && <span>{errors.email.message}</span>}

				<label className='flex text-lg mt-2 ' htmlFor='password'>
					<span className='text-lg mx-1'>Password:</span>

					<input
						className={`text-lg w-full bg-transparent border-2 rounded-md outline-none ${
							errors.password && 'border-red-600'
						}`}
						type='password'
						{...register('password')}
					/>
				</label>
				{errors.password && <span>{errors.password.message}</span>}

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
