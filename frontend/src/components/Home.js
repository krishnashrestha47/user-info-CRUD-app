import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteUser, getUserData } from "../helpers/axiosHelpers";
import DefaultLayout from "../layout/DefaultLayout";

export const Home = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const data = await getUserData();
    data.status === "success" && setUserData(data.result);
  };

  const deleteSelectedUser = async (_id) => {
    if (!window.confirm("Are you sure to delete?")) return;
    const { data } = await deleteUser(_id);
    console.log(data.status);
    data.status === "success" && getUserInfo();
  };

  return (
    <DefaultLayout>
      <div className="mt-5">
        <Container style={{ height: "70vh" }}>
          <div className="add_btn mt-2 text-end">
            <Link className="nav-link" to="/register">
              <Button>+ Add User Info</Button>
            </Link>
          </div>
          <h1 className="text-center mt-3">Employee Records</h1>
          <Table striped bordered hover className="mt-5">
            <thead>
              <tr className="table-warning">
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Job</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((item, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.work}</td>
                  <td>{item.mobile}</td>
                  <td className="d-flex justify-content-around">
                    <Link className="nav-link" to={`/view/${item._id}`}>
                      <Button className="btn-success">
                        <i className="fa-solid fa-eye"></i>
                      </Button>
                    </Link>
                    <Link className="nav-link" to={`/edit/${item._id}`}>
                      <Button className="btn-primary">
                        <i className="fa-solid fa-pen-to-square"></i>
                      </Button>
                    </Link>
                    <Button
                      onClick={() => deleteSelectedUser(item._id)}
                      className="btn-danger"
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    </DefaultLayout>
  );
};
