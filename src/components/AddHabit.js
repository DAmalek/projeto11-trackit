import styled from "styled-components";
import { accentColor } from "../constants/colors";

export default function AddHabit() {
  const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

  return (
    <>
      <HabitBox>
        <input placeholder="  nome do habito" />
        <Weekbtn>
          {weekdays.map((v, i) => (
            <h2 key={i}>{v}</h2>
          ))}
        </Weekbtn>
        <h1>Cancelar</h1>
        <button>Salvar</button>
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
  }
`;
const Weekbtn = styled.div`
  display: flex;
  width: 300px;

  margin-left: 18px;

  h2 {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #d5d5d5;
    margin: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #dbdbdb;
  }
`;
