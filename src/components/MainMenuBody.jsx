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
                <p style={{ margin: "2.5rem 0 4rem", paddingLeft: "5rem", fontSize: "12px"}}>Book My Health is a professional clinic which focus on the mental health of tortoises. 7 out of 10 tortoises are unfortunately killed when crossing the road which leads to a major mental health issues in tortoises. What happen is they are afraid when its time to cross the road to get to the other side of the road which might provide them with sufficient food or habitat. Hence they would always hit plateau whenever they want to cross the road and planning their next move which might unfortunately be death. So let us stop this and bring in your tortoise today to help solve this fatal issue amongst tortoises. We at Book My Health are always going to welcome tortoises with open arms and guide them through the process of crossing roads and developing a better mental health. Make your reservations now with our professional vets and start making a better future for tortoises.</p>
                <Button className="me-4 border-0 px-4 py-2" style={{ backgroundColor: "#FF7F50", fontSize: "20px"}}>Book Now</Button>
                <Button className="border-0 px-4 py-2" style={{ backgroundColor: "#FF7F50", fontSize: "20px"}} onClick={handleSchedule}>Check your schedule</Button>
                </div>
        </Container>
    )
}
