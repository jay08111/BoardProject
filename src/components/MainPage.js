import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import LoginForm from "./LoginForm";
const useStyle = makeStyles((theme) => ({
  boxStyle: {
    background: "linear-gradient(#e66465, #9198e5)",
    height: "100vh",
    display: "flex",
    alignItems: "center",
  },
  containerStyle: {
    backgroundColor: "#f4cbd8",
    height: "84vh",
    width: "60vw",
    borderRadius: "15px",
  },
  buttonStyle: {
    marginTop: "20px",
  },
}));
function MainPage() {
  const classes = useStyle();
  return (
    <Box className={classes.boxStyle}>
      <CssBaseline />
      <Container className={classes.containerStyle}>
        <NavBar>
          <Router>
            <Link to="/login" onClick={() => window.location.reload()}>
              <Button color="primary" className={classes.buttonStyle}>
                <VpnKeyIcon />
              </Button>
            </Link>
          </Router>
        </NavBar>
      </Container>
    </Box>
  );
}
const NavBar = styled.nav`
  height: 5vh;
  display: flex;
  justify-content: flex-end;
`;
export default MainPage;
