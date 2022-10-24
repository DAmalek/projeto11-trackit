import styled from "styled-components"
import LogInForm from "../../components/LogInForm"
import logo from '../../assets/images/logo.svg'
import { accentColor } from "../../constants/colors"
import { Link } from "react-router-dom"

export default function LogInPage() {
    return(
        <>
        <PageContainer>
            <img src={logo} alt="logo" />
            <LogInForm />
            <Link to='/cadastro'><p>Não tem conta? Cadastre-se!</p></Link>
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