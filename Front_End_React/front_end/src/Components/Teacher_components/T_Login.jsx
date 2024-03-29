import React, { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { loginTeacher } from "../../Services/Teacher_services/Teacher_APIs";
import { useNavigate } from "react-router-dom";
import { HNavbar } from "../HNavbar";
import backgroundImage from "./image.jpg";

export function T_Login(props) {
  console.log("Rendering T_Login component");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  //   const [updatePasswordMode, setUpdatePasswordMode] = useState(false);
  //   const [newPassword, setNewPassword] = useState("");
  //   const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    //updates the formData state with the new values and clears any validation errors for the corresponding field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));

    console.log(formData);
  };

  //   const handleUpdatePasswordClick = (e) => {
  //     e.preventDefault();
  //     setUpdatePasswordMode(true);
  //   };

  //   const handleUpdatePassword = (e) => {
  //     e.preventDefault();

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validate for fields
    const validationError = {};
    //check for empty fields
    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === "") {
        validationError[key] = "This Fiels is required";
      }
    });

    //display validation errors infields
    setErrors(validationError);

    //if no error stimulate a successful login
    if (Object.keys(validationError).length === 0) {
      //Action after successful login
      //alert("You have successfully loged in!");
      postOnAPI();
    }
  };

  const postOnAPI = async () => {
    try {
      const result = await loginTeacher(formData);
      console.log("from login api ", result.data, result.data.teacherId);
      const teachStatus = result.data.teachStatus;

      // Check the teacher status as an enum
      if (teachStatus === "ACTIVE") {
        localStorage.setItem("teacherId", result.data.teacherId);
        navigate("/teacher-dashboard");
      } else {
        // Handle inactive status
        alert("Your account is inactive. Please contact the administrator.");
      }
    } catch (error) {
      console.log("Error object:", error);

      // Check if error.response.data is available
      if (error.response && error.response.data) {
        // Handle error response data
        console.log("Error response data:", error.response.data);
      } else {
        // Fallback in case response data is not available
        alert("wrong email or password");
      }
    }
  };

  return (
    //jsx code for UI render
    <div>
      <HNavbar />
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "90vh", // Ensure the background covers the entire viewport
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container style={{ textAlign: "center", marginTop: "40px" }}>
          <div
            className="container"
            style={{
              backgroundColor: "#f0f8ff",
              width: "400px",
              borderRadius: "5px",
              border: "2px solid black",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              textAlign: "left",
              padding: "15px",
            }}
          >
            <h2
              className="heading"
              style={{
                textAlign: "center",
                backgroundColor: "darkgrey",
                margin: "-15px  -15px",
                paddingBottom: "10px",
                marginLeft: "-15px",
                marginRight: "-15px",
                borderRadius: "15px 15px 0 0",
              }}
            >
              TEACHER LOGIN
            </h2>
            <br />
            <form
              style={{ paddingTop: "10px", paddingBottom: "5px" }}
              onSubmit={handleSubmit}
            >
              <Row className="mb-3">
                {/* UserName*/}
                <Col md={12}>
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Email..."
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    style={{ color: "maroon" }}
                  >
                    {errors.teacherId}
                  </Form.Control.Feedback>
                </Col>
              </Row>

              <Row className="mb-3">
                {/*Password */}
                <Col md={12}>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    style={{ color: "maroon" }}
                  >
                    {errors.teacherPassword}
                  </Form.Control.Feedback>
                </Col>
              </Row>
              {/* Login Button */}
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <Button variant="outline-dark" type="submit">
                  Login
                </Button>
                {/* Update Password line on browser*/}
                {/* <p
                  className="tagging"
                  style={{
                    textAlign: "center",
                    fontSize: "13px",
                    marginTop: "10px",
                  }}
                >
                  <a
                    href="/"
                    style={{
                      color: "black",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Forgot password?
                  </a>
                </p> */}
              </div>
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
}
