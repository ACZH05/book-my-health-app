import { Col, Row, Form, Container, Button } from "react-bootstrap";
import '../style/AuthPage.css'
import { useState } from "react";

export default function AuthPage() {
    const [active, setActive] = useState(false)
    const handleClickSignIn = (e) => {
        e.preventDefault()
        setActive(true)
    }

    const handleClickSignUp = (e) => {
        e.preventDefault()
        setActive(false)
    }
  return (
    <div style={{ backgroundColor: "#FAF3E9", height: "100dvh", overflow: "hidden"}}>
        <Row className="flex-center rounded">
            <div className={active ? "overlay active" : "overlay"} style={{ width: "50%"}}>
                {active ? (
                    <div className="d-flex flex-column position-absolute top-50 start-0 translate-middle-y mx-5" style={{color: "#FAF3E9"}}>
                    <h3>Welcome To</h3>
                    <h1>BookMyHealth</h1>
                    <p>Start booking now by signing in!</p>
                    <Button className="mt-3 border-0 sign-up-button rounded-pill fw-bold" style={{ backgroundColor: "#FAF3E9", color: "#FF7F50"}} onClick={handleClickSignUp}>Sign Up</Button>
                </div>
                ) : (
                    <div className="d-flex flex-column position-absolute top-50 start-0 translate-middle-y mx-5" style={{color: "#FAF3E9"}}>
                        <h3>Welcome To</h3>
                        <h1>BookMyHealth</h1>
                        <p>First time user? Creat an account now!</p>
                        <Button className="mt-3 border-0 sign-up-button rounded-pill fw-bold" style={{ backgroundColor: "#FAF3E9", color: "#FF7F50"}} onClick={handleClickSignIn}>Sign Up</Button>
                    </div>
                )}
            </div>
            <Col className="p-0">
                <Container className="px-5 pt-4" style={{ width: "100%"}}>
                    <div style={{ fontSize: 32, fontWeight: "bold", color: "#FF7F50"}}>Sign Up</div>
                    <Form>
                        <Form.Control type="email" className="mt-5" style={{ width: "100%"}} placeholder="Enter Email" />
                        <Form.Control type="password" className="mt-4" style={{ width: "100%"}} placeholder="Enter password" />
                        <Form.Control type="text" className="mt-4" style={{ width: "100%"}} placeholder="Enter phone number" />
                        <Button type="submit" className="mt-5 border-0 sign-up-button rounded-pill" style={{ width: "100%", backgroundColor: "#FF7F50"}}>Sign Up</Button>
                    </Form>
                </Container>
            </Col>
            <Col className="p-0">
                <Container className="px-5 pt-4" style={{ width: "100%"}}>
                        <div style={{ fontSize: 32, fontWeight: "bold", color: "#FF7F50"}}>Sign In</div>
                        <Form>
                            <Form.Control type="email" className="mt-5" style={{ width: "100%"}} placeholder="Enter Email" />
                            <Form.Control type="password" className="mt-4" style={{ width: "100%"}} placeholder="Enter password" />
                            <Button type="submit" className="mt-5 border-0 sign-up-button rounded-pill" style={{ width: "100%", backgroundColor: "#FF7F50"}}>Sign In</Button>
                        </Form>
                    </Container>
            </Col>
        </Row>
    </div>
  )
}
