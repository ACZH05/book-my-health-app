import { Col, Row, Form, Container, Button } from "react-bootstrap";
import '../style/AuthPage.css'

export default function AuthPage() {
  return (
    <div style={{ backgroundColor: "#FAF3E9", height: "100dvh", overflow: "hidden"}}>
        <Row className="flex-center rounded">
            {/* <div style={{ height: "100%", width: "50%", position: "absolute", backgroundColor: "#FF7F50"}}></div> */}
            <Col className="p-0">
                <Container className="p-5" style={{ width: "100%"}}>
                    <div style={{ fontSize: 32, fontWeight: "bold", color: "#FF7F50"}}>Sign Up</div>
                    <Form>
                        <Form.Control type="email" className="mt-5" style={{ width: "100%"}} placeholder="Enter Email" />
                        <Form.Control type="password" className="mt-4" style={{ width: "100%"}} placeholder="Enter password" />
                        <Form.Control type="text" className="mt-4" style={{ width: "100%"}} placeholder="Enter phone number" />
                        <Button id="sign-up-button" type="submit" className="mt-5 border-0 rounded-pill" style={{ width: "100%", backgroundColor: "#FF7F50"}}>Sign Up</Button>
                    </Form>
                </Container>
            </Col>
            <Col className="p-0">
                <Container className="p-5" style={{ width: "100%"}}>
                        <div style={{ fontSize: 32, fontWeight: "bold", color: "#FF7F50"}}>Sign In</div>
                        <Form>
                            <Form.Control type="email" className="mt-5" style={{ width: "100%"}} placeholder="Enter Email" />
                            <Form.Control type="password" className="mt-4" style={{ width: "100%"}} placeholder="Enter password" />
                            <Button id="sign-up-button" type="submit" className="mt-5 border-0 rounded-pill" style={{ width: "100%", backgroundColor: "#FF7F50"}}>Sign In</Button>
                        </Form>
                    </Container>
            </Col>
        </Row>
    </div>
  )
}
