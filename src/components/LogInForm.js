import { useContext, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { ThreeDots } from  'react-loader-spinner'



export default function LogInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const {userdata, setUserdata} = useContext(UserContext);
  const [loading, setLoading] = useState(false)
  

  function logInRequest(event) {
    event.preventDefault()
    setLoading(true)
    const body = {
      email ,
      password
    }
    const promise = axios.post(`${BASE_URL}auth/login`, body);
    
    promise.then((resp)=>{
      console.log(resp.data);
      setUserdata(resp.data);
      navigate('/hoje');
      
    })
    promise.catch((erro) => {
      alert(erro.response.data.message);
      setLoading(false);
    });
  }


  return (
    <>
      <Form onSubmit={logInRequest}>
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="  email"
          type="text"
          disabled={loading}
        />

        <input
          name="password"
          alue={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="  senha"
          type="password"
          disabled={loading}
        />

        <button disabled={loading} type="submit">
          {loading === false ? (
            'Entrar'
          ) : (
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#ffffff"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          )}
        </button>
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
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 21px;
  }
  input {
    background-color: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
  }
  input::placeholder {
    font-size: 21px;
  }
  input:disabled{
    background-color: #F2F2F2;
  }
  input:-webkit-autofill {
    
  }
  
`
