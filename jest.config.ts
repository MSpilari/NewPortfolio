import nextJest from 'next/jest'

const createJestConfig = nextJest({
	dir: './'
})

const customJestConfig = {
	// Add more setup options before each test is run
	setupFilesAfterEnv: ['<rootDir>/src/tests/jest.setup.js'],
	// if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
	moduleDirectories: ['node_modules', '<rootDir>/'],
	testEnvironment: 'jest-environment-jsdom'
}

export default createJestConfig(customJestConfig)
