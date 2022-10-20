import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styled from "styled-components";
import { textColor } from "../../constants/colors";
export default function History() {
  return (
    <>
      <Header />
      <PageContainer>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </PageContainer>

      <Footer />
    </>
  );
}

const PageContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: ${textColor};
    font-size: 19px;
    padding: 18px 22px;
  }
`;
