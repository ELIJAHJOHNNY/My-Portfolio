import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";

const DisplaySkills = ({ mySkills }) => {
  return (
    <Container>
      <Grid container spacing={3} className="flex justify-center items-center ">
        {mySkills.map(skills => (
          <Grid item key={skills.id} sm={12} xs={6} md={3} lg={2}>
            <Card
              sx={{ maxWidth: 120 }}
              className="hover:shadow-md hover:shadow-[#7600bc] shadow-2xl cursor-pointer transition-transform duration-500 relative"
            >
              <CardMedia
                component="img"
                image={skills.img}
                alt={skills.name}
                sx={{
                  width: "120px",
                  height: "120px",
                }}
              />
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontSize: "14px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {skills.name}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DisplaySkills;
