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
        <div className="btn-container">
          <Link to="/login" className="btn login-btn">
            login
          </Link>
          <Link to="/signup" className="btn sign-btn">
            Sign-Up
          </Link>
        </div>
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
  .btn-container {
    margin: auto 1rem;
  }
  .btn {
    text-transform: capitalize;
    margin-left: 3rem;
    font-size: 1.4rem;
    text-decoration: none;
    color: #544231;
  }
  @media screen and (min-width: 280px) and (max-width: 414px) {
    justify-content: flex-end;
  }
`;

export default MainPage;
