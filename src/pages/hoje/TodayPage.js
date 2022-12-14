import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TodayHabit from "../../components/TodayHabit";
import styled from "styled-components";
import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import { ProgressContext } from "../../context/ProgressContext";

export default function TodayPage() {
  var customParseFormat = require("dayjs/plugin/customParseFormat");
  dayjs.extend(customParseFormat);
  
  require("dayjs/locale/pt-br");
  let today = dayjs().locale("pt-br").format("dddd, DD/MM");

  const {
    todayList,
     setTodaylist,
     taskdonePercent,
      setTaskdonePercent
    } = useContext(ProgressContext);
  
  
  
  console.log('%% ', taskdonePercent);

  useEffect(() => {
    setTaskdonePercent(((todayList.filter(e => e.done === true).length)/todayList.length)*100)
  },[todayList])
  

  return (
    <>
      <Header />
      <PageContainer>
        <TodayTitle>
          <h1>{today}</h1>
          {taskdonePercent > 0 ? (
            <h3>{taskdonePercent}% dos habitos concluidos</h3>
          ) : (
            <h2>Nenhum hábito concluído ainda</h2>
          )}
        </TodayTitle>
        <TodayHabit />
      </PageContainer>
      <Footer />
    </>
  );
}

const PageContainer = styled.div`
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  `;
const TodayTitle = styled.div`
    width: 345px;
    margin-bottom: 19px;
    h1 {
        font-size: 24px;
        color: #126BA5;
        margin-bottom: 4px;
    }
    h2 {
        font-size: 18px;
        color: #bababa;
    }
    h3 {
      color: green;
    }


`
