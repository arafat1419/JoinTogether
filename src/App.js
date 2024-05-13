import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./layouts/MainPage";
import { ROUTE_PLAN, ROUTE_REGISTER } from "./utility/routePage";
import PlanPage from "./layouts/PlanPage";
import RegisterPage from "./layouts/RegisterPage";

function App() {
  return (
    <div className="App">
      <MainPage>
        <BrowserRouter>
          <Routes>
            <Route path={ROUTE_PLAN} element={<PlanPage />} />
            <Route path={ROUTE_REGISTER} element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      </MainPage>
    </div>
  );
}

export default App;
