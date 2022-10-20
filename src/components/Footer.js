import styled from "styled-components";
import { accentColor } from "../constants/colors";

export default function Footer() {
  return (
    <>
      <Menu>
        <h1>Hábitos</h1>
        <div>Hoje</div>
        <h1>Histórico</h1>
      </Menu>
    </>
  );
}

const Menu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 20px;
    color: ${accentColor};
    font-weight: 400;
    margin: 0 21px;
  }

  div {
    width: 91px;
    height: 91px;
    border-radius: 100px;
    background-color: ${accentColor};
    color: white;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 35px;
  }
`;