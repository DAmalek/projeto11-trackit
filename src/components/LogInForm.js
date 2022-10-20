import { useState } from "react";
import styled from "styled-components";

export default function LogInForm() {
  return (
    <>
      <Form>
        <input
          name="email" 
          placeholder="  email" 
          type="text" />

        <input 
          name="senha" 
          placeholder="  senha" 
          type="text" />

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
