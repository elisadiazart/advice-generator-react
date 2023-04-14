import { useEffect, useState } from "react"
import { StyledContainer, StyledDiceContainer, StyledDice, StyledDivider, StyledAdvice, StyledAdviceNumber } from "./styles"

const dataGenerate = () => {
    const [data, setData] = useState([])
    const [randomAdvice, setRandomAdvice] = useState(false)

    useEffect(() => {
        fetchData ('https://api.adviceslip.com/advice', setData)
    }, [randomAdvice]);

    return {data,
        randomAdvice,
        setRandomAdvice
    }
}


const fetchData = async (url, setData) =>{
        const request = await fetch(url);
        const data = await request.json()
        console.log(data.slip.advice);
        setData(data.slip)
}

const AdviceGenerator = () =>{
    const {data ,randomAdvice,setRandomAdvice} = dataGenerate()
    return <StyledContainer>
    <StyledAdviceNumber>ADVICE #{data.id}</StyledAdviceNumber>
    <StyledAdvice>{data.advice}</StyledAdvice>
    <StyledDivider></StyledDivider>
    <StyledDiceContainer>
        <StyledDice src="/public/icon-dice.svg" alt="Dice" onClick={() => setRandomAdvice(!randomAdvice)}/>
    </StyledDiceContainer>
</StyledContainer>
}




export default AdviceGenerator