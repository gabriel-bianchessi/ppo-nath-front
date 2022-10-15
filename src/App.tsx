import { CookiesProvider } from "react-cookie"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import PrivateRoutes from "./utils/PrivateRoute"

export default function App() {
  return (<>
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter> 
    </CookiesProvider>
  </>)
}