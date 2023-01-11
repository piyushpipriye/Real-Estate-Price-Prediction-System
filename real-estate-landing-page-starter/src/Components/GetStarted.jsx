import { Button, styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import homeIllustration from "../media/illustration.png";
import CustomButton from "./CustomButton";

const GetStarted = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "#17275F",
    height: "416px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(3, 3, 0, 3),
      width: "90%",
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 0, 10, 0),
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
  }));
  const CustomContainer2 = styled(Container)(({ theme }) => ({
    backgroundColor: "#fff",
    height: "100px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "116",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(3, 3, 0, 3),
      width: "90%",
    },
  }));

  return (
    <CustomBox>
      <CustomContainer>
        <Box>
        <CustomContainer2>
        <form>
          <label style={{color: "#17275F"}}>
            Location:
          </label>
            <select>
              <option value="grapefruit">Naregaon</option>
            </select>
          <label style={{color: "#17275F"}}>
             Year:
          </label>
            <select>
              <option value="grapefruit">2023</option>
            </select><br></br>
          <label style={{color:"#17275F"}}>
            Total.Sq.ft:
          </label>
          <input type= "text" placeholder="Enter total sq.ft area"></input>
            <CustomButton
            backgroundColor="#fff"
            color="#17275F"
            buttonText="Estimate price"
            border="2px solid #17275F "
            getStartedBtn={true}
            type="submit"
          />
        </form>
        </CustomContainer2>
        
        </Box>

        <img
          src={homeIllustration}
          alt="illustration"
          style={{ maxWidth: "100%" }}
        />
      </CustomContainer>
    </CustomBox>
  );
};

export default GetStarted;