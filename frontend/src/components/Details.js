import React, { useEffect, useState } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getUserData } from "../helpers/axiosHelpers";
import img from "../profile.png";

export const Details = () => {
  const [userData, setUserData] = useState([]);

  const { _id } = useParams();
  useEffect(() => {
    getSingleUserInfo();
  }, []);

  const getSingleUserInfo = async () => {
    const { result } = await getUserData();
    setUserData(result);
  };

  const singleUser = userData.filter((item) => item._id === _id);
  console.log(singleUser);

  return (
    <Container>
      {singleUser.map((item) => (
        <div className="mt-5">
          <h2>Welcome {item.name}</h2>
          <Card className="mt-4 p-2" style={{ width: "40rem" }}>
            <Card.Body>
              <Row>
                <div className="left_view col-lg-6 col-md-6 col-12">
                  <Card.Img style={{ width: 50 }} src={img} alt="profile" />
                  <h3 className="mt-3">
                    Name: <span>{item.name}</span>
                  </h3>
                  <h3 className="mt-3">
                    Age: <span>{item.age}</span>
                  </h3>
                  <p className="mt-3">
                    <i className="fa-solid fa-envelope"></i> Email:{" "}
                    <span>{item.email}</span>
                  </p>
                  <p className="mt-3">
                    <i className="fa-solid fa-briefcase"></i> Occupation:{" "}
                    <span>{item.work}</span>
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
                    <i className="fa-solid fa-mobile-screen"></i> Mobile:{" "}
                    <span>{item.mobile}</span>
                  </p>
                  <p className="mt-3">
                    <i className="fa-solid fa-location-dot"></i> Location:{" "}
                    <span>{item.address}</span>
                  </p>
                  <p className="mt-3">
                    Description: <span>{item.description}</span>
                  </p>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </div>
      ))}
    </Container>
  );
};
