import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./layouts/MainPage";
import { ROUTE_PLAN } from "./utility/routePage";
import PlanPage from "./layouts/PlanPage";

function App() {
  return (
    <div className="App">
      <MainPage>
        <BrowserRouter>
          <Routes>
            <Route path={ROUTE_PLAN} element={<PlanPage />} />
          </Routes>
        </BrowserRouter>
      </MainPage>
    </div>
  );
}

export default App;
