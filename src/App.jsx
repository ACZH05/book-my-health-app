import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import { AuthProvider } from "./components/AuthProvider";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import MainMenuPage from "./pages/MainMenuPage";
import { getAuth } from "firebase/auth";
import SectionAuth from "./components/SectionAuth";

function Layout() {
  const auth = getAuth(

  )
  return (
    <>
      <SectionAuth>
        <Navbar className="pt-4" style={{ background: "#FAF3E9"}}>
          <Container>
            <Navbar.Brand style={{ color: "#FF7F50", fontWeight: "bold" }}>BookMyHealth</Navbar.Brand>
              <Nav>
                  <Nav.Link href='/' className="me-4" style={{ color: "#FF7F50", fontWeight: "500" }}>Check My Booking schedule</Nav.Link>
                  <Button className="px-4 rounded-pill" style={{ background: "transparent", border: "2px solid #FF7F50", color: "#FF7F50", fontWeight: "500" }} onClick={() => auth.signOut()}>Logout</Button>
              </Nav>
          </Container>
        </Navbar>
      </SectionAuth>
      <Outlet />
    </>
  )
}

export default function App() {
  return (
    <div style={{ backgroundColor: "#FAF3E9",height: "100vh", overflow: "hidden"}}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<MainMenuPage />} />
              <Route path="/login" element={<AuthPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}
