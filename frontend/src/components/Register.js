import React, { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { postUserData } from "../helpers/axiosHelpers.js";
import DefaultLayout from "../layout/DefaultLayout";

const initialState = {
  name: "",
  email: "",
  age: "",
  mobile: "",
  work: "",
  address: "",
  description: "",
};
export const Register = () => {
  const [formData, setFormData] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const result = await postUserData(formData);
    result.status === "success"
      ? alert("data has been added")
      : alert(result.message);
  };

  return (
    <DefaultLayout>
      <Container style={{ height: "70vh" }} className="mt-5">
        <Link className="nav-link" to="/">
          ⏎ back
        </Link>

        <Form onSubmit={handleOnSubmit} className="mt-5">
          <Row>
            <Form.Group className="mb-4 col-lg-6 col-md-6 col-12">
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                name="name"
                type="name"
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group
              className="mb-4 col-lg-6 col-md-6 col-12"
              controlId="formGroupEmail"
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                name="email"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group
              className="mb-4 col-lg-6 col-md-6 col-12"
              controlId="formGroupPassword"
            >
              <Form.Label>Age</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                name="age"
                type="number"
                placeholder="Enter age"
              />
            </Form.Group>
            <Form.Group
              className="mb-4 col-lg-6 col-md-6 col-12"
              controlId="formGroupPassword"
            >
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                name="mobile"
                type="number"
                placeholder="Enter mobile number"
              />
            </Form.Group>
            <Form.Group
              className="mb-4 col-lg-6 col-md-6 col-12"
              controlId="formGroupPassword"
            >
              <Form.Label>Work</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                name="work"
                type="text"
                placeholder="Enter work"
              />
            </Form.Group>
            <Form.Group
              className="mb-4 col-lg-6 col-md-6 col-12"
              controlId="formGroupEmail"
            >
              <Form.Label>Address</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                name="address"
                type="text"
                placeholder="Enter address"
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formGroupPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                name="description"
                as="textarea"
                rows={5}
                placeholder="Your text here"
              />
            </Form.Group>
          </Row>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </DefaultLayout>
  );
};
