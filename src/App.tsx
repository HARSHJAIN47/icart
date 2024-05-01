import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { theme } from "./theme";
import {
  ForgotPassword,
  Login,
  ResetPassword,
  Signup,
} from "./components/auth";
import {
  PATH_FORGOT_PASSWORD,
  PATH_RESET_PASSWORD,
  PATH_SIGNUP,
  PATH_lOGIN,
} from "./constants";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path={PATH_lOGIN} element={<Login />} />
          <Route path={PATH_SIGNUP} element={<Signup />} />
          <Route path={PATH_RESET_PASSWORD} element={<ResetPassword />} />
          <Route path={PATH_FORGOT_PASSWORD} element={<ForgotPassword />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
