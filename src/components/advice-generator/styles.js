import styled from 'styled-components';

const StyledContainer = styled.div`
	width: 380px;
	background-color: #313a48;
	margin: auto;
	margin-top: 20%;
	box-shadow: 30px 50px 80px rgba(0, 0, 0, 0.100202);
	border-radius: 15px;
	padding-bottom: 3rem;
`;

const StyledDiceContainer = styled.div`
	background-color: #53ffaa;
	width: 55px;
	height: 55px;
	border-radius: 50%;
	display: flex;
	margin: auto;
`;

const StyledDice = styled.img`
	padding: 1rem;
`;

const StyledDivider = styled.div`
	width: 295px;
	height: 16px;
	background-image: url(/public/pattern-divider-mobile.svg);
	background-repeat: no-repeat;
	background-image: 100%;
	margin: auto;
	margin-bottom: 2rem;
`;

const StyledAdvice = styled.h2`
	text-align: center;
	width: 300px;
	margin: 2rem auto;
`;

const StyledAdviceNumber = styled.p`
	color: #53ffaa;
	text-align: center;
	letter-spacing: 3.45714px;
	font-size: 0.8rem;
	padding: 3rem 0 0 0;
`;

export {
	StyledContainer,
	StyledDiceContainer,
	StyledDice,
	StyledDivider,
	StyledAdvice,
	StyledAdviceNumber
};
