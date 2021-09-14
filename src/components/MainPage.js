import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import styled from "styled-components";
const useStyle = makeStyles((theme) => ({
  boxModel: {
    textAlign: "center",
  },
}));
function MainPage() {
  const classes = useStyle();
  return (
    <main>
      <NavBar>
        <Link to="/login">login</Link>
        <Link to="/signup">sign-Up</Link>
      </NavBar>
      <Box className={classes.boxModel}>
        <Typography variant="h2">The Main Page</Typography>
        <p>you can write whatever you want</p>
      </Box>
    </main>
  );
}
const NavBar = styled.nav`
  height: 7vh;
  width: 100%;
  background-color: #e5bd90;
  display: flex;
  justify-content: flex-start;
`;

export default MainPage;
