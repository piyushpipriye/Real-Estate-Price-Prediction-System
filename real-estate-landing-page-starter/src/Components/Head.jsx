import React from 'react'
import {Box,Typography,styled} from "@mui/material";
import {Container} from "@mui/system"

function Head() {
    const CustomBox = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        gap: theme.spacing(5),
        marginTop: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        },
      }));
    
  return (
    <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "0.3vh" }}>
      <Container>
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "40px",
                color: "#000336",
                fontWeight: "500",
                mt: 10,
                mb: 4,
              }}
            >
              Real Estate Price Prediction System
            </Typography>
            </Box>
            </CustomBox>
            </Container>
            </Box>
  );
    
}


export default Head