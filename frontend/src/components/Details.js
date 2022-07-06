import React from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import img from "../profile.png";

export const Details = () => {
  return (
    <Container>
      <div className="mt-4">
        <h1>Welcome Krishna Shrestha</h1>
        <Card className="p-2" style={{ width: "40rem" }}>
          <Card.Body>
            <Row>
              <div className="left_view col-lg-6 col-md-6 col-12">
                <Card.Img style={{ width: 50 }} src={img} alt="profile" />
                <h3 className="mt-3">
                  Name: <span>Krishna Shrestha</span>
                </h3>
                <h3 className="mt-3">
                  Age: <span>32</span>
                </h3>
                <p className="mt-3">
                  Email: <span>krish_sth2005@yahoo.com</span>
                </p>
                <p className="mt-3">
                  Occupation: <span>Full Stack Developer</span>
                </p>
              </div>
              <div className="right_view col-lg-6 col-md-6 col-12">
                <p className="mt-4">
                  Mobile: <span>1234567890</span>
                </p>
                <p className="mt-3">
                  location: <span>Sydney</span>
                </p>
                <p className="mt-3">
                  Description: <span>Hello! My name is krishna shrestha</span>
                </p>
              </div>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};
