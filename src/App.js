import { BrowserRouter,Route,Routes } from "react-router-dom";
import GlobalStyle from './assets/styles/globalStyle';
import SignInPage from "./pages/cadastro/SignInPage";
import HistoryPage from "./pages/historico/HistoryPage";
import TodayPage from "./pages/hoje/TodayPage";
import LogInPage from "./pages/login/LogInPage";
import AddHabitPage from "./pages/habito/AddHabitpage";
import { UserContext } from "./context/UserContext";
import { useState } from "react";
import React from "react";
function App() {
  const [userdata, setUserdata] = useState(null);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <UserContext.Provider value={{ userdata, setUserdata}}>
        <Routes>
          <Route path='/' element={<LogInPage />}  />
          <Route path='cadastro' element={<SignInPage />}  />
          <Route path='/habitos' element={<AddHabitPage />}  />
          <Route path='/hoje' element={<TodayPage />}  />
          <Route path='/historico' element={<HistoryPage />}  />
          <Route path='login' element={<LogInPage />}  />
          <Route path='login' element={<LogInPage />}  />
        </Routes>
      </UserContext.Provider>
      
    </BrowserRouter>
  );
}

export default App;
