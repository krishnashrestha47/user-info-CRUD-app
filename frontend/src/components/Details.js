import React from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import img from "../profile.png";

export const Details = () => {
  return (
    <Container>
      <div className="mt-5">
        <h2>Welcome Krishna Shrestha</h2>
        <Card className="mt-4 p-2" style={{ width: "40rem" }}>
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
                  <i class="fa-solid fa-envelope"></i> Email:{" "}
                  <span>krish_sth2005@yahoo.com</span>
                </p>
                <p className="mt-3">
                  <i class="fa-solid fa-briefcase"></i> Occupation:{" "}
                  <span>Full Stack Developer</span>
                </p>
              </div>
              <div className="right_view col-lg-6 col-md-6 col-12">
                <div className="add_btn text-end">
                  <Button className="btn-primary mx-2">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Button>
                  <Button className="btn-danger">
                    <i className="fa-solid fa-trash-can"></i>
                  </Button>
                </div>
                <p className="mt-4">
                  <i class="fa-solid fa-mobile-screen"></i> Mobile:{" "}
                  <span>1234567890</span>
                </p>
                <p className="mt-3">
                  <i class="fa-solid fa-location-dot"></i> Location:{" "}
                  <span>Sydney</span>
                </p>
                <p className="mt-3">
                  Description:{" "}
                  <span>
                    Hello! My name is krishna shrestha. I am a full stack
                    developer
                  </span>
                </p>
              </div>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};
