import { fireEvent, render, RenderResult } from '@testing-library/react'
import singletonRouter from 'next/router'
import mockRouter from 'next-router-mock'

import { NavigationBar } from './index'

jest.mock('next/router', () => require('next-router-mock'))
jest.mock('next/dist/client/router', () => require('next-router-mock'))

describe('Navigation Bar tests', () => {
	let navBar: RenderResult

	beforeEach(() => {
		mockRouter.setCurrentUrl('/initial')
		navBar = render(<NavigationBar />)
	})

	it('Should be able to send to the Home Page after click on <Link/> with href /', () => {
		const HomeButton = navBar.getByTestId('homeButton')

		fireEvent.click(HomeButton)

		expect(singletonRouter).toMatchObject({ asPath: '/' })
	})

	it('Should be able to send to the About Page after click on <Link/> with href /about', () => {
		const AboutButton = navBar.getByTestId('aboutButton')

		fireEvent.click(AboutButton)

		expect(singletonRouter).toMatchObject({ asPath: '/about' })
	})

	it('Should be able to send to the Skills Page after click on <Link/> with href /skills', () => {
		const SkillsButton = navBar.getByTestId('skillsButton')

		fireEvent.click(SkillsButton)

		expect(singletonRouter).toMatchObject({ asPath: '/skills' })
	})

	it('Should be able to send to the Projects Page after click on <Link/> with href /projects', () => {
		const ProjectsButton = navBar.getByTestId('projectsButton')

		fireEvent.click(ProjectsButton)

		expect(singletonRouter).toMatchObject({ asPath: '/projects' })
	})

	it('Should be able to send to the Login Page after click on <Link/> with href /login', () => {
		const LoginButton = navBar.getByTestId('loginButton')

		fireEvent.click(LoginButton)

		expect(singletonRouter).toMatchObject({ asPath: '/login' })
	})
})
