import React, { useEffect, useState } from "react";
import { Alert, Button, Card, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { deleteUser, getUserData } from "../helpers/axiosHelpers";
import DefaultLayout from "../layout/DefaultLayout";
import img from "../profile.png";

export const Details = () => {
  const [userData, setUserData] = useState([]);

  const { _id } = useParams();
  useEffect(() => {
    getSingleUserInfo();
  }, []);

  const getSingleUserInfo = async () => {
    const { result } = await getUserData(_id);
    setUserData(result);
  };

  const deleteSelectedUser = async (_id) => {
    if (!window.confirm("Are you sure to delete?")) return;
    const { data } = await deleteUser(_id);
    console.log(data.status);
    data.status === "success" && alert("The user has been deleted");
  };

  console.log(userData);
  return (
    <DefaultLayout>
      <Link className="mt-5 container nav-link" to="/">
        ⏎ back
      </Link>
      <Container
        className=" d-flex justify-content-center"
        style={{ height: "70vh" }}
      >
        {/* {userData.map((item) => ( */}

        <div className="mt-5">
          <h2>Welcome {userData.name}</h2>
          <Card className="mt-4 p-2" style={{ width: "40rem" }}>
            <Card.Body>
              <Row>
                <div className="left_view col-lg-6 col-md-6 col-12">
                  <Card.Img style={{ width: 50 }} src={img} alt="profile" />
                  <h3 className="mt-3">
                    Name: <span>{userData.name}</span>
                  </h3>
                  <h3 className="mt-3">
                    Age: <span>{userData.age}</span>
                  </h3>
                  <p className="mt-3">
                    <i className="fa-solid fa-envelope"></i> Email:{" "}
                    <span>{userData.email}</span>
                  </p>
                  <p className="mt-3">
                    <i className="fa-solid fa-briefcase"></i> Occupation:{" "}
                    <span>{userData.work}</span>
                  </p>
                </div>
                <div className="right_view col-lg-6 col-md-6 col-12">
                  <div className="add_btn text-end">
                    <Link to={`/edit/${_id}`}>
                      <Button className="btn-primary mx-2">
                        <i className="fa-solid fa-pen-to-square"></i>
                      </Button>
                    </Link>
                    <Button
                      onClick={() => deleteSelectedUser(userData._id)}
                      className="btn-danger"
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </Button>
                  </div>
                  <p className="mt-4">
                    <i className="fa-solid fa-mobile-screen"></i> Mobile:{" "}
                    <span>{userData.mobile}</span>
                  </p>
                  <p className="mt-3">
                    <i className="fa-solid fa-location-dot"></i> Location:{" "}
                    <span>{userData.address}</span>
                  </p>
                  <p className="mt-3">
                    Description: <span>{userData.description}</span>
                  </p>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </div>
        {/* ))} */}
      </Container>
    </DefaultLayout>
  );
};
