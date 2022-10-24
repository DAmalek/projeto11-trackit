import AddHabit from "../../components/AddHabit";
import Header from "../../components/Header";
import styled from "styled-components";
import { textColor } from "../../constants/colors";
import Footer from "../../components/Footer";
import { useState } from "react";
import HabitList from "../../components/HabitList";

export default function AddHabitPage() {
  const [addhabit, setAddhabit] = useState(false);
  const [SelectedDays,setSelectedDays] = useState([])
  
  console.log()
  return (
    <>
      <Header addhabit={addhabit} setAddhabit={setAddhabit} />
      <PageContainer>
        {addhabit ? (
          <AddHabit
            setAddhabit={setAddhabit}
            SelectedDays={SelectedDays}
            setSelectedDays={setSelectedDays}
          />
        ) : (
          ""
        )}
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
        <HabitList
          SelectedDays={SelectedDays}
          setSelectedDays={setSelectedDays}
        />
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
