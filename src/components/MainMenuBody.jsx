import { Button, Container, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function MainMenuBody() {
    const navigate = useNavigate()

    const handleSchedule = () => {
        navigate('/booking')
    }
    return (
        <Container className="d-flex align-items-center mt-4">
            <Image src="../src/assets/8431434_3902892.svg" style={{ height: "550px"}} />
            <div style={{ textAlign: "right"}}>
                <div style={{ fontSize: "64px", fontWeight: "bold"}}>BookMyHealth</div>
                <p style={{ margin: "2.5rem 0 4rem", paddingLeft: "5rem", fontSize: "22px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At varius vel pharetra vel turpis nunc eget lorem. Nunc sed velit dignissim sodales ut eu sem. Aliquet nec ullamcorper sit amet risus. Felis eget nunc lobortis mattis aliquam faucibus.</p>
                <Button className="me-4 border-0 px-4 py-2" style={{ backgroundColor: "#FF7F50", fontSize: "20px"}}>Book Now</Button>
                <Button className="border-0 px-4 py-2" style={{ backgroundColor: "#FF7F50", fontSize: "20px"}} onClick={handleSchedule}>Check your schedule</Button>
                </div>
        </Container>
    )
}
