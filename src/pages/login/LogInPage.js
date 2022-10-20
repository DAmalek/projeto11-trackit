import styled from "styled-components"
import LogInForm from "../../components/LogInForm"
import logo from '../../assets/images/logo.svg'
import { accentColor } from "../../constants/colors"

export default function LogInPage() {
    return(
        <>
        <PageContainer>
            <img src={logo} alt="logo" />
            <LogInForm />
            <p>Não tem conta? Cadastre-se!</p>
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