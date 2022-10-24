import styled from "styled-components";
import mais from '../assets/images/+.svg'
import rectangleminor from '../assets/images/rectangleminor.svg'
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

export default function Header({addhabit, setAddhabit}) {
  const {userdata, setUserdata} = useContext(UserContext);
  const profilePic = userdata.image;
  
  return (
    <>
      <Navbar>
        <Link to={'/'}><h1>TrackIt</h1></Link>
        <img src={profilePic} alt="" />
      </Navbar>
      <SubTitle>
        <h2>Meus hábitos</h2>
        <img onClick={()=> setAddhabit(true)} src={rectangleminor} alt="r" />
        <img onClick={()=> setAddhabit(true)} src={mais} alt="m" />
      </SubTitle>
    </>
  );
}

const Navbar = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #126ba5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  h1 {
    font-family: "Playball", cursive;
    font-size: 50px;
    color: white;
    font-style: normal;
    font-weight: 400;
    margin: 0 15px;
  }
  img {
    border-radius: 100px;
    width: 50px;
    height: 50px;
    margin: 0 15px;
  }
  
`;

const SubTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  
  margin-top: 74px;
  position: relative;

  h2 {
    font-size: 24px;
    color: #126BA5;
    padding-left: 20px;
  }
  img {
    position: absolute;
    top: 7px;
    right: 17px;
    cursor: pointer;
  }
  img:nth-child(3) {
    position: absolute;
    top: 17px;
    right: 30px;
  }
`;
