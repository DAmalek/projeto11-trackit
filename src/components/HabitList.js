import styled from "styled-components"
import { textColor } from "../constants/colors"
import trash from '../assets/images/trash.svg'
export default function HabitList() {
  const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

  return (
    <>
      <Container>
        <p>Habito fooo</p>
        <Weekbtn>
          {weekdays.map((v, i) => (
            <h2 key={i}>{v}</h2>
          ))}
        </Weekbtn>
        <img color="#666666" src={trash} alt="aaa" />
      </Container>

      <Container>
        <p>Habito fooo</p>
        <Weekbtn>
          {weekdays.map((v, i) => (
            <h2 key={i}>{v}</h2>
          ))}
        </Weekbtn>
        <img color="#666666" src={trash} alt="aaa" />
      </Container>
    </>
  );
}

const Container = styled.div`
    width: 350px;
    height: 90px;
    background-color: white;
    border-radius: 5px;
    position: relative;
    margin: 10px 0;

    p {
        padding: 10px 3px;
        margin-left: 18px;
        color: ${textColor};
        font-size: 22px;
        font-weight: 400;
    }
    img {
        position: absolute;
        top: 10px;
        right: 13px;
    }
    
`

const Weekbtn = styled.div`
    display: flex;
    width: 300px;
    
    margin-left: 18px;
    
    h2 {
        width: 30px;
        height: 30px;
        border-radius: 5px;
        border: 1px solid #D5D5D5;
        margin: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #DBDBDB;
    }

`