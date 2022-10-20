import styled from "styled-components";
import { textColor } from "../constants/colors";
import rectangle from '../assets/images/rectangle.svg'
import check from '../assets/images/check.svg'
export default function TodayHabit(){
    return(
        <>
            <Container>
                <h2>Ler blablabla</h2>
                <p>sequencia atual: xxx</p>
                <p>seu record: xxx</p>
                <img src={rectangle} alt='rect' />
                <img src={check} alt='check' />

            </Container>
        </>
    )
}

const Container = styled.div`
    width: 350px;
    height: 100px;
    background-color: white;
    border-radius: 5px;
    position: relative;
    margin: 10px 0;
    padding: 10px 0;

    h2 {
        padding: 10px 3px;
        margin-left: 18px;
        color: ${textColor};
        font-size: 22px;
        font-weight: 400;
    }
    img {
        position: absolute;
        top: 15px;
        right: 13px;
    }
    img:nth-child(5){
        position: absolute;
        top: 33px;
        right: 26px;
    }
    p{
        font-size: 13px;
        padding: 2px 3px;
        margin-left: 18px;
        color: ${textColor};
    }
    
`