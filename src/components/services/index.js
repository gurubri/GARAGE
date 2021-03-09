import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllServices } from "../../actions/service.action";
import { Link } from "react-router-dom";
import { Card, Col, CardColumns } from "react-bootstrap";
const Services = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services);
  console.log(services.services);
  useEffect(() => {
    dispatch(getAllServices());
  }, []);

  const renderServices = (services) => {
    return services.map((item, i) => (
      <Card>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            ${item.price}
          </Card.Subtitle>
          <Card.Text>{item.description}</Card.Text>
          <Link className="card-link" to={`/services/name=${item.name}`}>
            choose service
          </Link>
        </Card.Body>
      </Card>
    ));
  };

  return <CardColumns>{renderServices(services.services)}</CardColumns>;
};

export default Services;
