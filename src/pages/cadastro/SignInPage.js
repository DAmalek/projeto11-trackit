import styled from "styled-components"
import SignInForm from "../../components/SignInForm"
import logo from '../../assets/images/logo.svg'
import { accentColor } from "../../constants/colors"
import { Link } from "react-router-dom"

export default function SignInPage(){
    return(
        <>
        <PageContainer>
            <img src={logo} alt="logo" />
            <SignInForm />
            <Link to='/'><p>Já tem conta? Faça login!</p></Link> 
        </PageContainer>
        
        </>
    )
}

const PageContainer = styled.div`
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        font-size: 15px;
        font-family: 'Lexend Deca', sans-serif;
        color: ${accentColor} ;
        text-decoration: underline;


    }
`