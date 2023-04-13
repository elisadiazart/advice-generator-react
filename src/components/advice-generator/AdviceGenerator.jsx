import { useEffect, useState } from "react"
// import { StyledContainer, StyledDiceContainer, StyledDice, StyledDivider, StyledAdvice, StyledAdviceNumber } from "./styles"

const AdviceGenerator = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData ('https://api.adviceslip.com/advice', setData)
    }, [])


    const fetchData = async (url, setData) =>{
        const request = await fetch(url);
        const data = await request.json()
        console.log(data);
    }

    return console.log(data);

    // return <StyledContainer>
    //     <StyledAdviceNumber>ADVICE #117</StyledAdviceNumber>
    //     <StyledAdvice>It is easy to sit up and take notice, what&apos;s difficult is getting up and taking action.</StyledAdvice>
    //     <StyledDivider></StyledDivider>
    //     <StyledDiceContainer>
    //         <StyledDice src="/public/icon-dice.svg" alt="" />
    //     </StyledDiceContainer>
    // </StyledContainer>
}

export default AdviceGenerator