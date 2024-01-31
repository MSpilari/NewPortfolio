import { FaJava } from 'react-icons/fa'
import { IoLogoNodejs, IoLogoAngular } from 'react-icons/io'
import {
	SiTypescript,
	SiPython,
	SiReact,
	SiNextdotjs,
	SiFirebase,
	SiPostgresql,
	SiMongodb,
	SiDocker,
	SiSpringboot,
	SiJest,
	SiCypress,
	SiNestjs
} from 'react-icons/si'

const allLogos = {
	frontend: [
		{ icon: <SiNextdotjs />, name: 'NextJs' },
		{ icon: <SiReact />, name: 'ReactJs' },
		{ icon: <IoLogoAngular />, name: 'Angular' }
	],
	backend: [
		{ icon: <SiNestjs />, name: 'NestJs' },
		{ icon: <IoLogoNodejs />, name: 'NodeJs' },
		{ icon: <SiSpringboot />, name: 'Springboot' },
		{ icon: <SiDocker />, name: 'Docker' },
		{ icon: <SiFirebase />, name: 'Firebase' },
		{ icon: <SiPostgresql />, name: 'Postgresql' },
		{ icon: <SiMongodb />, name: 'MongoDb' }
	],
	tests: [
		{ icon: <SiJest />, name: 'Jest' },
		{ icon: <SiCypress />, name: 'Cypress' }
	],
	languages: [
		{ icon: <SiTypescript />, name: 'Typescript' },
		{ icon: <FaJava />, name: 'Java' },
		{ icon: <SiPython />, name: 'Python' }
	]
}

export { allLogos }
