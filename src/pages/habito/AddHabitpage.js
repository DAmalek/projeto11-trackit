import AddHabit from "../../components/AddHabit";
import Header from "../../components/Header";
import styled from "styled-components";
import { textColor } from "../../constants/colors";
import Footer from "../../components/Footer";

export default function AddHabitPage() {
  return (
    <>
      <Header />
      <PageContainer>
        <AddHabit />
        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
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
