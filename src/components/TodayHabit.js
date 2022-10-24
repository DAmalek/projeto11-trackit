import styled from "styled-components";
import { textColor } from "../constants/colors";
import rectangle from '../assets/images/rectangle.svg'
import check from '../assets/images/check.svg'
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { UserContext } from "../context/UserContext";
import { ProgressContext } from "../context/ProgressContext";

export default function TodayHabit(){
    const { userdata, setUserdata } = useContext(UserContext);
    const {todayList, setTodaylist} = useContext(ProgressContext);
    const [counter, setCounter] = useState();
    const [counterhi, setCounterhi] = useState();
    const [clicked,setClicked] = useState(false);
    const token = userdata.token
    
    console.log('today ', todayList);
    useEffect(() => {
        axios
          .get(`${BASE_URL}habits/today`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((resp) => {
            setTodaylist(resp.data);
          })
          .catch((err) => alert(err.response.data.message));
      }, [clicked]);
    
    function mark(id) {
      console.log(id);
      const token = userdata.token;
      axios
        .post(
          `${BASE_URL}habits/${id}/check`,
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((resp) => {
          //setList(...list,resp.data);
          setClicked(!clicked);
          console.log(resp);
        })
        .catch((error) => alert(error.response.data.message));
    }
    function unmark(id) {
      const token = userdata.token;
      axios
        .post(
          `${BASE_URL}habits/${id}/uncheck`,
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((resp) => {
          //setList(...list,resp.data);
          setClicked(!clicked);
          console.log(resp);
        })
        .catch((error) => alert(error.response.data.message));
    }
    
    return (
      <>
        {todayList.map((value) => (
          <Container clicked key={value.id}>
            <h2>{value.name}</h2>
            <p>
              sequencia atual:{" "}
              <StyledSpan done={value.done}>
                {value.currentSequence} dias
              </StyledSpan>
            </p>
            <p>
              seu record:{" "}
              <StyledSpan
                done={
                  value.currentSequence === value.highestSequence && value.done
                }
              >
                {value.highestSequence} dias
              </StyledSpan>
            </p>
            <Rectangle
              onClick={() => {
                value.done ? unmark(value.id) : mark(value.id);
              }}
              done={value.done}
            >
              <img src={check} alt="check" />
            </Rectangle>
          </Container>
        ))}
      </>
    );
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

    p{
        font-size: 13px;
        padding: 2px 3px;
        margin-left: 18px;
        color: ${textColor};
    }
`
const Rectangle = styled.div`
        position: absolute;
        background-color: ${props => props.done ? "green" : "grey"};
        display: flex;
        align-items: center;
        justify-content: center;
        top: 15px;
        right: 13px;
        width: 75px;
        height: 75px;
        border-radius: 5px;
`
const StyledSpan = styled.span`
    color: ${props => props.done ? 'green' : '#666666'}
`