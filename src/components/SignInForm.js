import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BASE_URL } from "../constants/urls";

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate()
  
  function signInRequest(event) {
    event.preventDefault()
    const body = {
      email ,
      name ,
      image ,
      password
    }
    
    const promise = axios.post(`${BASE_URL}auth/sign-up`, body);
    
    promise.then((resp)=>{
      alert('funfou');
      
      navigate('/');
      
      
    })
    promise.catch((erro)=>
      alert(erro.response.data.message)
    )
  }

  
  return (
    <>
      <Form onSubmit={signInRequest}>
        <input
          name="email" 
          value={email}
          onChange={e=>setEmail(e.target.value)}
          placeholder="  email" 
          type="text" 
          required
          
        />

        <input 
          name="password" 
          value={password}
          onChange={e=>setPassword(e.target.value)}
          placeholder="  senha" 
          type="password" 
          required
        />

        <input 
          name="name" 
          value={name}
          onChange={e=>setName(e.target.value)}
          placeholder="  nome" 
          type="text" 
          required
        />

        <input 
          name="image"
          value={image}
          onChange={e=>setImage(e.target.value)} 
          placeholder="  foto" 
          type="text"          
          required 
        />

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