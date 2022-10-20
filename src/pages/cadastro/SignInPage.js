import styled from "styled-components"
import SignInForm from "../../components/SignInForm"
import logo from '../../assets/images/logo.svg'
import { accentColor } from "../../constants/colors"

export default function SignInPage(){
    return(
        <>
        <PageContainer>
            <img src={logo} alt="logo" />
            <SignInForm />
            <p>Já tem conta? Faça login!</p>
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