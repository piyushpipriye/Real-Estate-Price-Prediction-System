import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Axios from "axios";
import style from "./style.css";
import homeIllustration from "../media/illustration.png";
import CustomButton from "./CustomButton";
import { Row, Button, Container, Col } from "react-bootstrap";

const CustomContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "#17275F",
  borderRadius: "15px",
  alignItems: "center",
  marginTop: "20px",
  marginBottom: "20px",
  paddingTop: "50px",
  paddingBottom: "40px",
}));

const Form = () => {
  // console.log(sqft);
const [value, setvalue] = useState(false)
  const [loc, setloc] = useState("");
  const [year, setyear] = useState("");
  const [input, setinput] = useState("");
  const [sqmembers, setMembers] = useState([{}]);

  const sendInfo = (e) => {
    e.preventDefault();
    console.log({ loc, year, input });
    let data = { loc, year, input };
    fetch("http://localhost:5000/postapi", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(response => response.json()).then(data => setMembers(data));

    console.log("sqmember",sqmembers);
    const value = (e)=>{
    
      
    }
    let load = document.getElementById("para").style.display ="block";
  };

  return (
    <CustomContainer>
      <Container>
        <form>
          <div className="div" id="div">
            <Row className="justify-content-center">
              <Col>
                <div className="form-group">
                  <label className="label" id="label">
                    Location:
                  </label>
                  <select
                    className="select"
                    onChange={(e) => {
                      setloc(e.target.value);
                    }}
                    value={loc}
                    id="loc"
                  >
                    <option>Select</option>
                    <option value={"101"}>Naregaon</option>
                    <option value={"101"}>Naregaon-main</option>
                  </select>
                </div>
              </Col>
              <Col>
                {" "}
                <div className="form-group">
                  <label className="label" id="label">
                    Select year:
                  </label>
                  <select
                    className="select"
                    id="year"
                    onChange={(e) => {
                      setyear(e.target.value);
                    }}
                    value={year}
                  >
                    <option>Select</option>
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                  </select>
                </div>
              </Col>
              <Col>
                <div className="form-group">
                  <label className="label" id="label">
                    Total Sq.ft:
                  </label>
                  <input
                    id="input"
                    type="number"
                    placeholder="enter total sq.ft area"
                    onChange={(e) => {
                      setinput(e.target.value);
                    }}
                    value={input}
                  ></input>
                </div>
              </Col>
              <Col lg="12" className="text-center mt-4">
                <Button type="button" id="button" onClick={sendInfo}>
                  Estimate price
                </Button>
              </Col>
            </Row>

            <br />

            <p id="para" className="para" >
              The estimated price of per.sq.ft area of naregaon in {year} will be
              {typeof sqmembers.members === "undefined" ? (
                <p>Loading..</p>
              ) : (
                sqmembers.members.map((member, i) => <p key={i}>{member}</p>)
              )}
            </p>
            <p id="para" className="para" >
              your estimated price for "total sq.ft. area" is
            </p>
          </div>
        </form>
        {/* <img
          src={homeIllustration}
          alt="illustration"
          style={{ maxWidth: "100%" }}>
          </img> */}
      </Container>
    </CustomContainer>
  );
};
export default Form;
