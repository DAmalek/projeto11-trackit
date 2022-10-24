import AddHabit from "../../components/AddHabit";
import Header from "../../components/Header";
import styled from "styled-components";
import { textColor } from "../../constants/colors";
import Footer from "../../components/Footer";
import { useState } from "react";
import HabitList from "../../components/HabitList";
import mais from '../../assets/images/+.svg'
import rectangleminor from '../../assets/images/rectangleminor.svg'

export default function AddHabitPage() {
  const [addhabit, setAddhabit] = useState(false);
  const [SelectedDays,setSelectedDays] = useState([])
  const [list, setList] = useState([]);
  const [refresh, setRefresh] = useState(false)
  console.log()
  return (
    <>
      <Header />
      <SubTitle>
        <h2>Meus hábitos</h2>
        <img onClick={()=> setAddhabit(true)} src={rectangleminor} alt="r" />
        <img onClick={()=> setAddhabit(true)} src={mais} alt="m" />
      </SubTitle>
      <PageContainer>
        {addhabit ? (
          <AddHabit
            setAddhabit={setAddhabit}
            SelectedDays={SelectedDays}
            setSelectedDays={setSelectedDays}
            list={list}
            setList={setList}
            refresh={refresh}
            setRefresh={setRefresh}
          />
        ) : (
          ""
        )}
        {list !== [] ?
         "" :
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>}
        <HabitList
          list={list}
          setList={setList}
          refresh={refresh}
          setRefresh={setRefresh}
        />
      </PageContainer>
      <Footer />
    </>
  );
}

const PageContainer = styled.div`
  height: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  margin-bottom: 50px;

  p {
    color: ${textColor};
    font-size: 19px;
    padding: 18px 22px;
  }
`;
const SubTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  
  margin-top: 74px;
  position: relative;

  h2 {
    font-size: 24px;
    color: #126BA5;
    padding-left: 20px;
  }
  img {
    position: absolute;
    top: 7px;
    right: 17px;
    cursor: pointer;
  }
  img:nth-child(3) {
    position: absolute;
    top: 17px;
    right: 30px;
  }
`;
