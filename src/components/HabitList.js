import styled from "styled-components"
import { textColor } from "../constants/colors"
import trash from '../assets/images/trash.svg'
import { weekdays } from "../constants/data";
import WeekdaysBtn from "./WeekdaysBtn";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { UserContext } from "../context/UserContext";

export default function HabitList({ }) {
  const { userdata, setUserdata } = useContext(UserContext);
  const [list, setList] = useState([]);
  const token = userdata.token;
  
  
  console.log(list[0].days);
  useEffect(() => {
    axios
      .get(`${BASE_URL}habits`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((resp) => (setList(resp.data)) )
      .catch((err) => alert(err.response.data.message))
  }, []);

  return (
    <>
      {list.map((value) => (
        <Container key={value.id}>
          <p>{value.name}</p>
            
          <Weekbtn 
            habitDays={value.days} 
          >
          {weekdays.map((v, i) => (
              <h2 
                key={i}
                days={v.days}
              >{v.letter}</h2>
              ))}
          </Weekbtn>
          <img color="#666666" src={trash} alt="aaa" />
        </Container>
      ))}
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
    //padding-bottom: 15px;

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
    padding-bottom: 15px;
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
        background-color: ${(props) => (props.habitDays.includes(props.days) ? '#CFCFCF' : '#fffff')};
      }
      `
