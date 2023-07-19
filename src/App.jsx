import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import { AuthProvider } from "./components/AuthProvider";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import MainMenuPage from "./pages/MainMenuPage";

function Layout() {
  return (
    <>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand>BookMyHealth</Navbar.Brand>
            <Nav className='me-auto'>
                <Nav.Link href='/'>Check My Booking schedule</Nav.Link>
            </Nav>
            <Button variant='outline-dark'>Logout</Button>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
}

export default function App() {
  return (
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
  )
}
