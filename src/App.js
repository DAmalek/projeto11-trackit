import { BrowserRouter,Route,Routes } from "react-router-dom";
import GlobalStyle from './assets/styles/globalStyle';
import AddHabit from "./components/AddHabit";
import Footer from "./components/Footer";
import HabitList from "./components/HabitList";
import Header from "./components/Header";
import LogInForm from "./components/LogInForm";
import TodayHabit from "./components/TodayHabit";
import SignInPage from "./pages/cadastro/SignInPage";
import AddHabitPage from "./pages/habito/AddHabitpage";
import History from "./pages/historico/History";
import TodayPage from "./pages/hoje/TodayPage";
import LogInPage from "./pages/login/LogInPage";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <History  />
    </BrowserRouter>
  );
}

export default App;
