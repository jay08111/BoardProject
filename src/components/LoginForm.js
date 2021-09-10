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
    margin: "8rem auto",
    height: "70vh",
    width: "50vw",
    [theme.breakpoints.down("xs")]: {
      width: "80vw",
      height: "80vh",
      margin: "4.5rem auto",
    },
  },
  background: {
    background: "linear-gradient(#96deda , #50c9c3)",
    height: "100vh",
    overflow: "hidden",
    position: "relative",
    [theme.breakpoints.down("xs")]: {},
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
  },
  idInput: {
    marginTop: "30px",
    width: "18vw",
    borderRadius: "20px",
    [theme.breakpoints.down("xs")]: {
      width: "70vw",
      height: "4vh",
    },
  },
  passwordInput: {
    marginTop: "30px",
    width: "18vw",
    borderRadius: "20px",
    [theme.breakpoints.down("xs")]: {
      width: "70vw",
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
  },
  signUpBtn: {
    margin: "8rem auto",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "space-around",
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
              <Typography variant="h3">Log in</Typography>
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
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .right {
    flex: 1;
    text-align: center;
    margin-top: 12px;
  }
  .login-button {
    width: 17vw;
    margin-top: 2rem;
  }
  .login-btn {
    border: none;
    width: 17vw;
    border-radius: 20px;
    padding: 10px;
    margin-top: 2rem;
    background-color: #8a75ff;
    color: #fff;
    cursor: pointer;
  }
  .goggle-btn {
    border: none;
    width: 17vw;
    border-radius: 20px;
    padding: 8px;
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
    padding: 8px;
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
    left: 30%;
    top: 17%;
  }
  .googleicon {
    font-size: 1.1rem;
    position: absolute;
    left: 35%;
    top: 17%;
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
`;
export default LoginForm;
