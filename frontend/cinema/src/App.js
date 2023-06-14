import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Seat from "./components/seat";
import {Button, InputGroup} from "react-bootstrap";
const seats = fetch("http://localhost:8080/seats")
function App() {
    const renderSeats = seats.map(item => (
        <li key={item.id}>{item._id}</li>
    ));

    return (
    <div className="App">
        <Container className={"text-center"}>
        <Row className={"row xl-4 l-3 m-2 s-1"}>
            <Col><Seat status={"taken"}></Seat></Col>
            <Col><Seat></Seat></Col>
            <Col><Seat></Seat></Col>
            <Col><Seat></Seat></Col>
            <Col><Seat></Seat></Col>
        </Row>
            <h1>Name:</h1>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="Your Name" />
                    <Button className={"m-1 button btn-success"}>Send</Button>
                </Form.Group>
            </Form>
    </Container>
    </div>
  );
}

export default App;
