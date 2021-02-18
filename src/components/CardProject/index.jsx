import styled from 'styled-components'

const CardProjectDiv = styled.div`
	width: 300px;

	& a {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-decoration: none;
	}

	& img {
		width: 100%;
	}

	& span:nth-child(2) {
		font-size: 25px;
		margin: 10px 0;
		color: ${({ theme }) => theme.colors.hoverButtons};
	}
	& span:nth-child(3) {
		font-size: 15px;
		color: ${({ theme }) => theme.colors.text};
		text-align: center;
	}
`

const CardProject = ({ href, project }) => {
	return (
		<CardProjectDiv>
			<a href={href} target='__blank' rel='noreferrer'>
				<img src={project.img} />
				<span>{project.title}</span>
				<span>{project.description}</span>
			</a>
		</CardProjectDiv>
	)
}

export default CardProject
