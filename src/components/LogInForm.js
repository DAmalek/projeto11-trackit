import { useContext, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function LogInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const {userdata, setUserdata} = useContext(UserContext);

  

  function logInRequest(event) {
    event.preventDefault()
    const body = {
      email ,
      password
    }
    const promise = axios.post(`${BASE_URL}auth/login`, body);
    
    promise.then((resp)=>{
      console.log(resp.data)
      alert('funfou');
      navigate('/habitos')
      setUserdata(resp.data);
      
    })
    promise.catch((erro)=>
      alert(erro.response.data.message)
    )
  }


  return (
    <>
      <Form onSubmit={logInRequest}>
        <input
          name="email" 
          value={email}
          onChange={e=>setEmail(e.target.value)}
          placeholder="  email" 
          type="text" />

        <input 
          name="password" 
          alue={password}
          onChange={e=>setPassword(e.target.value)}
          placeholder="  senha" 
          type="password" />

        <button type="submit">Entrar</button>
      </Form>
    </>
  );
}

const Form = styled.form`
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0;
  font-size: 18px;
  button {
    width: 300px;
    height: 50px;
    align-self: center;
    font-size: 21px;
  }
  input::placeholder {
    font-size: 21px;
    
  }

  
`;
