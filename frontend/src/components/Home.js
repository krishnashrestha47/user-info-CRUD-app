import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";

export const Home = () => {
  return (
    <DefaultLayout>
      <div className="mt-5">
        <Container>
          <div className="add_btn mt-2 text-end">
            <Link className="nav-link" to="/register">
              <Button>+ Add Data</Button>
            </Link>
          </div>
          <Table striped bordered hover className="mt-5">
            <thead>
              <tr className="table-warning">
                <th>Id</th>
                <th>Username</th>
                <th>Email</th>
                <th>Job</th>
                <th>Number</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>mark@gmail.com</td>
                <td>Software Developer</td>
                <td>1234567890</td>
                <td>
                  <Button className="btn-success">
                    <i className="fa-solid fa-eye"></i>
                  </Button>{" "}
                  {""}
                  <Button className="btn-primary">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Button>{" "}
                  {""}
                  <Button className="btn-danger">
                    <i className="fa-solid fa-trash-can"></i>
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    </DefaultLayout>
  );
};
