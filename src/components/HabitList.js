import styled from "styled-components"
import { textColor } from "../constants/colors"
import trash from '../assets/images/trash.svg'
import { weekdays } from "../constants/data";
import WeekdaysBtn from "./WeekdaysBtn";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { UserContext } from "../context/UserContext";
import { accentColor } from "../constants/colors";

export default function HabitList({list, setList,refresh, setRefresh}) {
  const { userdata, setUserdata } = useContext(UserContext);
  const [wannaD,setWannaD] = useState(false);
  const token = userdata.token;
  
  
  console.log(list);
  useEffect(() => {
    axios
      .get(`${BASE_URL}habits`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((resp) => {
        setList(resp.data);
      })
      .catch((err) => alert(err.response.data.message));
  }, [refresh]);

    function deleteHabit(props) {
      console.log('cole', props)
      //const newlist = [...list.filter(e => e.id !== props)];
      axios.delete(`${BASE_URL}habits/${props}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((resp) =>
          setRefresh(!refresh)
        )
        //.catch(err=>alert(err.response.data.message))
    }

  return (
    <>
      {list.map((value) => (
        <Container key={value.id}>
          <p>{value.name}</p>
          {wannaD === true ? (
            <span>Quer excluir o habito, mermo?</span>
          ) : ( <></>
            
          )}

          {wannaD === true ? (
            <Confirm>
              {" "}
              <h1 onClick={() => setWannaD(false)}>Cancelar</h1>
              <button onClick={() => deleteHabit(value.id)}>
                Confirmar!
              </button>{" "}
            </Confirm>
          ) : (
            <Weekbtn3 habitDays={value.days}>
              {weekdays.map((v, i) => (
                <Weekbtn2 key={i} click={value.days.includes(v.days)}>
                  {v.letter}
                </Weekbtn2>
              ))}
            </Weekbtn3>
          )}

          <img
            onClick={() => setWannaD(true)}
            color="#666666"
            src={trash}
            alt="aaa"
          />
        </Container>
      ))}
    </>
  );
}
//
const Container = styled.div`
    width: 350px;
    height: 100px;
    background-color: white;
    border-radius: 5px;
    position: relative;
    margin: 10px 0;
    p {
        width: 300px;
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
    span{
        font-size: 17px;
        margin-left: 25px;
        color: ${textColor} ;
    }
`
const Weekbtn3 = styled.div`
    display: flex;
    width: 300px;
    margin-bottom: 10px;
    height: 100px;
    margin-left: 18px;
    
  
  `
const Weekbtn2 = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #d5d5d5;
    margin: 3px;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: ${(props) => (props.click) ? '#CFCFCF' : '#fffff'};
    color: ${(props) => (props.click ? '#ffffff' : '#dbdbdb')};
    `
const Confirm = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  button{
      background-color: #52B6FF;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      border: none;
      font-size: 16px;
      border-radius: 5px;
      height: 25px;
      width: 94px;
      font-weight: 400;
      margin-left: 60px;
      
      :hover{
          cursor: pointer;
      }
      }
      h1{
        color: #52B6FF;
        font-size: 17px;
        :hover{
            cursor: pointer;
        }
      }
`