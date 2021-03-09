import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col, Card, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllServices } from "../../actions/service.action";
import { addCar } from "../../actions/car.actions";

const Order = (props) => {
  const dispatch = useDispatch();
  const service = useSelector((state) => state.services);
  const user = JSON.parse(localStorage.getItem("User"));
  const ownerId = user._id;
  const name1 = props.match.params.name.split("=")[1];
  const [carReg, setcarReg] = useState("");
  const [phoneNumber, setphoneNumber] = useState();
  const [services, setservices] = useState([]);

  useEffect(() => {
    dispatch(getAllServices());
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    services.push(name1);

    dispatch(addCar({ carReg, phoneNumber, services, ownerId }));
  };

  return (
    <>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                Car Number Plate:<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Number plate"
                onChange={(e) => setcarReg(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Number"
                onChange={(e) => setphoneNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Service Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Password"
                value={name1}
                disabled
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <h2>Add more services</h2>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>Service:</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setservices([...services, e.target.value])}
              >
                {service.services.map((item, i) => (
                  <option value={item.name} key={i}>
                    {item.name}
                  </option>
                ))}
              </Form.Control>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Service 2</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setservices([...services, e.target.value])}
              >
                {service.services.map((item, i) => (
                  <option value={item.name} key={i}>
                    {item.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Service 3</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setservices([...services, e.target.value])}
              >
                {service.services.map((item, i) => (
                  <option value={item.name} key={i}>
                    {item.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Button variant="primary" type="submit" onClick={submitForm}>
            Add order
          </Button>
        </Col>
      </Row>
      <Row></Row>
    </>
  );
};

export default Order;
