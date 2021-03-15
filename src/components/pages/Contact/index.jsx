import { useState } from 'react'
import Button from '../../Button'
import DefaultTitle from '../../Titles'
import DefaultAnimation from '../../Animation'
import AnimationJson from '../../../assets/hellohand.json'
import { DefaultInput, DefaultTextArea, FormContactWrapper } from './styles'

const ContactForm = () => {
	const [infoObject, setInfoObject] = useState({
		name: '',
		email: '',
		message: ''
	})
	const formSubmited = event => {
		console.log(infoObject)
		return event.preventDefault()
	}
	const userWrite = event => {
		const { name, value } = event.target
		return setInfoObject({
			...infoObject,
			[name]: value
		})
	}

	return (
		<FormContactWrapper onSubmit={e => formSubmited(e)}>
			<DefaultTitle text='Me contate !' />
			<DefaultInput
				type='text'
				name='name'
				value={infoObject.name}
				placeholder='Nome'
				onChange={e => userWrite(e)}
			/>
			<DefaultInput
				type='text'
				name='email'
				value={infoObject.email}
				placeholder='E-mail'
				onChange={e => userWrite(e)}
			/>
			<DefaultTextArea
				value={infoObject.message}
				name='message'
				placeholder='Sua mensagem...'
				onChange={e => userWrite(e)}
			></DefaultTextArea>
			<Button label='Enviar Mensagem !' />
		</FormContactWrapper>
	)
}

const Animation = () => {
	return <DefaultAnimation animationJson={AnimationJson} />
}

export { ContactForm, Animation }
