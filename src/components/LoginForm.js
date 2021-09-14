import React from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import { IoLogoGoogle } from "react-icons/io";
const useStyle = makeStyles((theme) => ({
  boxStyle: {
    margin: "4rem auto",
    height: "83vh",
    width: "50vw",
    [theme.breakpoints.down("xs")]: {
      width: "80vw",
      height: "80vh",
      margin: "4.5rem auto",
    },
    "@media screen and (max-width : 320px)": {
      height: "85vh",
      margin: "3rem auto",
    },
    "@media screen and (min-width: 768px) and (max-width: 769px)": {
      width: "75vw",
    },
    "@media screen and (min-width: 770px ) and (max-width: 1024px )": {
      width: "70vw",
    },
    "@media screen and (min-height : 360px ) and (max-height :540px)": {
      width: "70vw",
      margin: "2rem auto",
    },
    "@media screen and (min-height : 320px ) and (max-height : 321px)": {
      width: "70vw",
      margin: "1rem auto",
    },
    "@media screen and (min-height: 280px) and (max-height: 281px)": {
      width: "70vw",
      margin: "1.3rem auto",
    },
  },
  background: {
    background: "linear-gradient(#96deda , #50c9c3)",
    height: "100vh",
    overflow: "hidden",
    position: "relative",
  },
  loginBox: {
    width: "20vw",
    height: "60vh",
    margin: "1rem auto",
    [theme.breakpoints.down("xs")]: {
      width: "70vw",
      display: "flex",
      flexDirection: "column",
    },
    "@media screen and (min-width: 768px) and (max-width: 769px)": {
      width: "60vw",
    },
    "@media screen and (min-width: 770px ) and (max-width: 1024px )": {
      width: "60vw",
    },
    "@media screen and (min-height : 360px ) and (max-height : 540px)": {
      width: "60vw",
    },
    "@media screen and (min-height : 320px ) and (max-height : 321px)": {
      width: "40vw",
      margin: "-3rem auto",
    },
    "@media screen and (min-height: 280px) and (max-height: 281px)": {
      margin: "-2rem auto",
      width: "40vw",
    },
  },
  idInput: {
    marginTop: "30px",
    width: "18vw",
    borderRadius: "20px",
    [theme.breakpoints.down("xs")]: {
      width: "70vw",
      height: "4vh",
    },
    "@media screen and (min-width: 768px) and (max-width: 769px)": {
      width: "50vw",
    },
    "@media screen and (min-width: 770px ) and (max-width: 1024px )": {
      width: "40vw",
    },
    "@media screen and (min-height : 320px ) and (max-height : 321px)": {
      width: "40vw",
    },
    "@media screen and (min-height: 360px) and (max-height: 362px)": {
      marginRight: "45px",
    },
    "@media screen and (min-height: 410px) and (max-height: 411px)": {
      marginRight: "45px",
    },
    "@media screen and (min-height: 414px) and (max-height: 415px)": {
      marginRight: "45px",
    },
    "@media screen and (min-height: 280px) and (max-height: 281px)": {
      marginRight: "25px",
    },
  },
  passwordInput: {
    marginTop: "30px",
    width: "18vw",
    borderRadius: "20px",
    [theme.breakpoints.down("xs")]: {
      width: "70vw",
    },
    "@media screen and (min-width: 768px) and (max-width: 769px)": {
      width: "50vw",
    },
    "@media screen and (min-width: 770px ) and (max-width: 1024px )": {
      width: "40vw",
    },
    "@media screen and (min-height : 320px ) and (max-height : 321px)": {
      width: "40vw",
    },
    "@media screen and (min-height: 375px) and (max-height: 376px)": {
      marginTop: "0.9rem",
    },
  },
  checkBox: {
    display: "flex",
    justifyContent: "flex-start",
    marginTop: "10px",
  },
  checkTypo: {
    fontSize: "0.9rem",
    marginTop: "10px",
    marginRight: "-5px",
  },
  loginButton: {
    display: "flex",
    flexDirection: "column",
    width: "17vw",
    margin: "2rem auto",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      margin: "-2rem auto",
      marginLeft: "1.2rem",
    },
    "@media screen and (min-width: 768px) and (max-width: 769px)": {
      width: "60vw",
    },
    "@media screen and (min-width: 770px ) and (max-width: 1024px )": {
      width: "50vw",
    },
    "@media screen and (min-height : 360px ) and (max-height : 540px)": {
      display: "none",
    },
    "@media screen and (min-height : 320px ) and (max-height : 321px)": {
      display: "none",
    },
    "@media screen and (min-height: 768px) and (max-height: 769px)": {
      marginTop: "-1.5rem",
    },
    "@media screen and (min-height: 280px) and (max-height: 281px)": {
      display: "none",
    },
  },
  signUpBtn: {
    margin: "8rem auto",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "space-around",
    },
    "@media screen and (min-width: 768px) and (max-width: 769px)": {
      width: "80vw",
    },
  },
  loginTypo: {
    "@media screen and (min-width: 770px ) and (max-width: 1024px )": {
      marginBottom: "4rem",
    },
    "@media screen and (min-height : 360px ) and (max-height : 540px)": {
      fontSize: "1.4rem",
      marginBottom: "-3rem",
    },
    "@media screen and (min-height : 320px ) and (max-height : 321px)": {
      fontSize: "1.2rem",
    },
    "@media screen and (min-height: 280px) and (max-height: 281px)": {
      fontSize: "1.2rem",
    },
  },
}));
function LoginForm() {
  const classes = useStyle();
  return (
    <Box className={classes.background}>
      <CssBaseline />
      <form>
        <Box className={classes.boxStyle}>
          <Wrapper>
            <section className="left">
              <img
                src={process.env.PUBLIC_URL + "/loginFormPic2.jpg"}
                alt="formpic"
                className="img_src"
              />
            </section>
            <section className="right">
              <Typography variant="h3" className={classes.loginTypo}>
                Log in
              </Typography>
              <Box className={classes.loginBox}>
                <TextField
                  id="standard-basic"
                  label="아이디"
                  className={classes.idInput}
                />
                <TextField
                  id="standard-basic"
                  label="비밀번호"
                  type="password"
                  className={classes.passwordInput}
                />
                <Box className={classes.checkBox}>
                  <Checkbox name="checkedB" color="primary" />
                  <Typography variant="h6" className={classes.checkTypo}>
                    아이디 저장
                  </Typography>
                </Box>
                <button className="login-btn">로그인</button>
                <Box className={classes.loginButton}>
                  <button type="submit" className="goggle-btn">
                    <IoLogoGoogle className="googleicon" />
                    구글 로그인
                  </button>
                  <button type="submit" className="facebook-btn">
                    <FacebookIcon className="facebookicon" /> 페이스북 로그인
                  </button>
                </Box>
                <Box className={classes.signUpBtn}>
                  <div className="underline"></div>
                  <button type="submit" className="signup-btn">
                    회원가입
                  </button>
                </Box>
              </Box>
            </section>
          </Wrapper>
        </Box>
      </form>
    </Box>
  );
}
const Wrapper = styled.article`
  height: 100%;
  display: flex;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  .left {
    flex: 1.3;
  }
  .left .img_src {
    height: 100%;
    max-width: 100%;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .right {
    flex: 1;
    text-align: center;
    margin-top: 12px;
  }
  .login-btn {
    border: none;
    width: 17vw;
    border-radius: 20px;
    padding: 0.55rem;
    margin-top: 1.2rem;
    background-color: #8a75ff;
    color: #fff;
    cursor: pointer;
  }
  .goggle-btn {
    border: none;
    width: 17vw;
    border-radius: 20px;
    padding: 0.55rem;
    margin-top: 2rem;
    color: #fff;
    background-color: #ea4335;
    cursor: pointer;
    position: relative;
  }
  .facebook-btn {
    border: none;
    width: 17vw;
    border-radius: 20px;
    padding: 0.55rem;
    margin-top: 2rem;
    background-color: #3b5998;
    color: #fff;
    cursor: pointer;
    position: absolute;
    top: 50px;
  }
  .signup-btn {
    border: none;
    width: 5vw;
    border-radius: 10px;
    padding: 10px;
    margin-top: 2rem;
    cursor: pointer;
  }
  .underline {
    width: 18vw;
    height: 0.075rem;
    background-color: #000;
    margin: auto;
    padding: 0;
  }
  .facebookicon {
    font-size: 1.1rem;
    margin-right: 2px;
    margin-top: 1px;
    position: absolute;
    left: 20%;
    top: 17%;
  }
  .googleicon {
    font-size: 1.1rem;
    position: absolute;
    left: 25%;
    top: 17%;
  }
  /* ipad */
  @media screen and (max-width: 769px) {
    .left {
      display: none;
    }
    .login-btn {
      margin: 1.2rem auto;
      width: 60vw;
    }
    .goggle-btn {
      width: 60vw;
    }
    .facebook-btn {
      width: 60vw;
    }
    .underline {
      margin: -9rem auto;
      width: 60vw;
      position: absolute;
      top: 83%;
    }
    .signup-btn {
      width: 30vw;
      position: absolute;
      top: 70%;
      left: 36%;
    }
    .facebookicon {
      left: 22%;
      top: 17%;
    }
    .googleicon {
      left: 27%;
      top: 17%;
    }
  }
  @media screen and (max-width: 767px) {
    .left {
      display: none;
    }
    .login-btn {
      margin: 1.2rem auto;
      width: 60vw;
    }
    .goggle-btn {
      width: 60vw;
    }
    .facebook-btn {
      width: 60vw;
    }
    .underline {
      margin: -1rem auto;
      width: 70vw;
      position: absolute;
      top: 83%;
    }
    .signup-btn {
      width: 30vw;
      position: absolute;
      top: 78%;
    }
    .facebookicon {
      left: 22%;
      top: 17%;
    }
    .googleicon {
      left: 27%;
      top: 17%;
    }
  }
  @media screen and (min-width: 540px) and (max-width: 542px) {
    .facebookicon {
      left: 30%;
      top: 17%;
    }
    .googleicon {
      left: 33%;
      top: 22%;
    }
    .goggle-btn {
      left: 10%;
      top: 50%;
    }
    .facebook-btn {
      left: 10%;
      top: 120%;
    }
  }
  @media screen and (min-width: 411px) and (max-width: 413px) {
    .underline {
      margin: -1rem auto;
      width: 70vw;
      position: absolute;
      top: 78%;
    }
    .signup-btn {
      width: 30vw;
      position: absolute;
      top: 75%;
    }
    .facebookicon {
      left: 24%;
      top: 17%;
    }
    .googleicon {
      left: 29%;
      top: 17%;
    }
  }
  @media screen and (max-width: 320px) {
    .goggle-btn {
      left: -4%;
      top: 20%;
    }
    .facebook-btn {
      left: -4%;
    }
    .login-btn {
      margin: 0.45rem auto;
      width: 60vw;
    }
    .facebookicon {
      left: 18%;
      top: 17%;
    }
    .googleicon {
      left: 23%;
      top: 20%;
    }
  }
  @media screen and (max-width: 280px) {
    .facebookicon {
      left: 13%;
      top: 19%;
    }
    .googleicon {
      left: 20%;
      top: 22%;
    }
  }
  /* ipad pro */
  @media screen and (min-width: 770px) and (max-width: 1024px) {
    .left {
      display: none;
    }
    .right {
      margin-bottom: 2;
    }
    .login-btn {
      margin: 1.2rem auto;
      width: 50vw;
    }
    .goggle-btn {
      width: 50vw;
    }
    .facebook-btn {
      width: 50vw;
    }
    .underline {
      margin: -15rem auto;
      width: 60vw;
      position: absolute;
      top: 83%;
    }
    .signup-btn {
      width: 30vw;
      position: absolute;
      top: 69%;
      left: 35%;
    }
    .facebookicon {
      left: 22%;
      top: 17%;
    }
    .googleicon {
      left: 27%;
      top: 17%;
    }
  }
  @media screen and (min-height: 360px) and (max-height: 362px) {
    .login-btn {
      width: 30vw;
    }
    .underline {
      margin-top: -3.2rem;
      width: 60vw;
    }
    .signup-btn {
      margin: -1rem -0.3rem;
    }
  }
  @media screen and (min-height: 320px) and (max-height: 321px) {
    .login-btn {
      width: 20vw;
      margin-top: 0.7rem;
    }
    .underline {
      display: none;
    }
    .signup-btn {
      margin: -1.2rem 1.4rem;
      width: 20vw;
    }
  }
  @media screen and (min-height: 375px) and (max-height: 376px) {
    .login-btn {
      width: 20vw;
      margin-top: -1rem;
    }
    .underline {
      display: none;
    }
    .signup-btn {
      margin: 1.6rem 2.5rem;
      width: 20vw;
    }
  }
  @media screen and (min-height: 410px) and (max-height: 411px) {
    .login-btn {
      width: 40vw;
    }
    .underline {
      margin-top: -5rem;
      width: 60vw;
    }
    .signup-btn {
      margin: -2rem -0.5rem;
    }
  }
  @media screen and (min-height: 414px) and (max-height: 415px) {
    .login-btn {
      width: 30vw;
    }
    .underline {
      display: none;
    }
    .signup-btn {
      margin: -4rem -0.5rem;
    }
  }
  @media screen and (min-height: 768px) and (max-height: 769px) {
    .underline {
      display: none;
    }
    .signup-btn {
      margin: 4rem 0.15rem;
    }
  }
  @media screen and (min-height: 280px) and (max-height: 281px) {
    .underline {
      display: none;
    }
    .login-btn {
      width: 30vw;
      margin-top: 0rem;
    }
    .signup-btn {
      margin: -1rem -0.38rem;
    }
  }
  @media (orientation: landscape) {
    height: 80vh;
  }
`;
export default LoginForm;
