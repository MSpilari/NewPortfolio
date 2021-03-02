import Button from '../../Button'
import DefaultTitle from '../../Titles'
import { DefaultInput, DefaultTextArea, FormContactWrapper } from './styles'

const ContactForm = () => {
	return (
		<FormContactWrapper action=''>
			<DefaultTitle text='Me contate !' />
			<DefaultInput type='text' name='Nome' placeholder='Nome' />
			<DefaultInput type='text' name='Email' placeholder='E-mail' />
			<DefaultTextArea
				name='Mensagem'
				placeholder='Sua mensagem...'
			></DefaultTextArea>
			<Button label='Enviar Mensagem !' />
		</FormContactWrapper>
	)
}

export { ContactForm }
