import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TodayHabit from "../../components/TodayHabit";
import styled from "styled-components";
export default function TodayPage() {
    return(
        <>
        <Header />
        <PageContainer>
            <TodayHabit />
        </PageContainer>
        <Footer />
        </>
    )
}

const PageContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`