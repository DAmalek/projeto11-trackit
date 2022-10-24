
import { click } from "@testing-library/user-event/dist/click";
import axios from "axios";
import { useContext, useState } from "react";
import styled from "styled-components";
import { accentColor } from "../constants/colors";
import { weekdays } from "../constants/data";
import { BASE_URL } from "../constants/urls";
import { UserContext } from "../context/UserContext";
import WeekdaysBtn from "./WeekdaysBtn";

export default function AddHabit({setAddhabit,SelectedDays,setSelectedDays,list, setList,refresh, setRefresh}) {
  
  const [name,setName] = useState('')
  const {userdata, setUserdata} = useContext(UserContext);
  console.log(SelectedDays);
  console.log(name);

  function createHabit() {
    const body = {
      name,
      days: SelectedDays
    }
    const token = userdata.token;
    axios.post(
      `${BASE_URL}habits`, 
      body,
      { headers: { Authorization: `Bearer ${token}` } }  
    )
    .then(
      (resp) => {
        //setList(...list,resp.data);
        console.log(resp.data)
        setRefresh(!refresh)
      }
    )
    .catch(
      (error => alert(error.response.data.message))
    )
  }
  
  return (
    <>
      <HabitBox>
        <input 
          type='text'
          placeholder="  nome do habito"
          name="name"
          value={name}
          onChange={e=>setName(e.target.value)}          
          required
        />
        <WeekdaysBtn 
          SelectedDays={SelectedDays}
          setSelectedDays={setSelectedDays}
         />
        <h1 onClick={()=> setAddhabit(false)}>Cancelar</h1>
        <button onClick={createHabit} >Salvar</button>
      </HabitBox>
    </>
  );
}

const HabitBox = styled.div`
  width: 340px;
  height: 200px;
  border-radius: 5px;
  background-color: white;
  position: relative;

  h1 {
    font-size: 20px;
    font-family: "Lexend Deca", sans-serif;
    color: ${accentColor};
    margin: 10px;
    position: absolute;
    bottom: 15px;
    right: 120px;
    cursor: pointer;
  }

  input {
    margin: 3px;
    margin-top: 20px;
    margin-left: 18px;
  }
  input::placeholder {
    font-family: "Lexend Deca", sans-serif;
    font-size: 20px;
    color: #d5d5d5;
  }

  button {
    position: absolute;
    width: 90px;
    height: 40px;
    border-radius: 5px;
    font-family: "Lexend Deca", sans-serif;
    font-size: 20px;
    bottom: 15px;
    right: 20px;
    cursor: pointer;
  }
`;
