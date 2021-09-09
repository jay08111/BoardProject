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
  },
  background: {
    background: "linear-gradient(#96deda , #50c9c3)",
    height: "100vh",
    overflow: "hidden",
  },
  loginBox: {
    width: "20vw",
    height: "60vh",
    margin: "1rem auto",
  },
  idInput: {
    marginTop: "30px",
    width: "18vw",
    borderRadius: "20px",
  },
  passwordInput: {
    marginTop: "30px",
    width: "18vw",
    borderRadius: "20px",
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
                <div className="underline"></div>
                <button type="submit" className="signup-btn">
                  회원가입
                </button>
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
    padding: 10px;
    margin-top: 2rem;
    color: #fff;
    background-color: #ea4335;
    cursor: pointer;
  }
  .facebook-btn {
    border: none;
    width: 17vw;
    border-radius: 20px;
    padding: 10px;
    margin-top: 2rem;
    background-color: #3b5998;
    color: #fff;
    cursor: pointer;
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
    width: 19vw;
    height: 0.075rem;
    background-color: #fbe3e3;
    margin: auto;
    padding: 0;
  }
  .facebookicon {
    font-size: 1.1rem;
    margin-right: 2px;
    margin-top: 1px;
  }
  .googleicon {
    font-size: 1.1rem;
  }
`;
export default LoginForm;
