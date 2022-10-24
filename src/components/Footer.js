import { Link } from "react-router-dom";
import styled from "styled-components";
import { accentColor } from "../constants/colors";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import { ProgressContext } from "../context/ProgressContext";



export default function Footer() {
  const { taskdonePercent, setTaskdonePercent } = useContext(ProgressContext);
  
  return (
    <>
      <Menu>
        <Link to="/habitos">
          <h1>Hábitos</h1>
        </Link>
        <Link to="/hoje">
          <div>
            <CircularProgressbar
              styles={buildStyles({
                textColor: "#fff",
                pathColor: "#FFFFFF",
                trailColor: "#52B6FF",
              })}
              value={taskdonePercent}
              maxValue={100}
              text={'Hoje'}
            />
          </div>
        </Link>
        <Link to="/historico">
          <h1>Histórico</h1>
        </Link>
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
    padding: 4px;
  }

  a {
    text-decoration: none;
  }
`;
