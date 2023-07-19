import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import { AuthProvider } from "./components/AuthProvider";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
