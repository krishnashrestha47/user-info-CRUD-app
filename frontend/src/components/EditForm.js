import React, { useEffect, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getUserData, updateUser } from "../helpers/axiosHelpers";
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
export const EditForm = () => {
  useEffect(() => {
    getSingleUserInfo();
  }, []);

  const [formData, setFormData] = useState(initialState);

  const { _id } = useParams();

  const getSingleUserInfo = async () => {
    const { result } = await getUserData(_id);
    setFormData(result);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnUpdate = async (e) => {
    const { result } = await updateUser(_id, formData);
  };

  return (
    <DefaultLayout>
      <Container className="mt-5">
        <Link className="nav-link" to="/">
          ⏎ back
        </Link>

        <Form onSubmit={handleOnUpdate} className="mt-5">
          <Row>
            <Form.Group className="mb-4 col-lg-6 col-md-6 col-12">
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                name="name"
                value={formData.name}
                type="text"
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
                value={formData.email}
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
                value={formData.age}
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
                value={formData.mobile}
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
                value={formData.work}
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
                value={formData.address}
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
                value={formData.description}
                rows={5}
                placeholder="Your text here"
              />
            </Form.Group>
          </Row>
          <Button type="submit">Update</Button>
        </Form>
      </Container>
    </DefaultLayout>
  );
};
