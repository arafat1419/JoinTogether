import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./layouts/MainPage";
import {
  ROUTE_CONTINUE,
  ROUTE_PLAN,
  ROUTE_REGISTER,
} from "./utility/routePage";
import PlanPage from "./layouts/PlanPage";
import RegisterPage from "./layouts/RegisterPage";
import { AuthProvider } from "./AuthContext";
import IdentityPage from "./layouts/IdentityPage";

function App() {
  return (
    <div className="App">
      <MainPage>
        <BrowserRouter>
          <Routes>
            <Route
              path={ROUTE_PLAN}
              element={
                <AuthProvider>
                  <PlanPage />{" "}
                </AuthProvider>
              }
            />

            <Route
              path={ROUTE_REGISTER}
              element={
                <AuthProvider>
                  <RegisterPage />
                </AuthProvider>
              }
            />
            <Route
              path={ROUTE_CONTINUE}
              element={
                <AuthProvider>
                  <IdentityPage />
                </AuthProvider>
              }
            />
          </Routes>
        </BrowserRouter>
      </MainPage>
    </div>
  );
}

export default App;
