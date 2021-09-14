import React from "react";
import { Box } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core";
const useStyle = makeStyles((theme) => ({
  background: {
    background: "linear-gradient(#ffc3a0 , #ffafbd)",
    height: "100vh",
    overflow: "hidden",
  },
  boxStyle: {
    margin: "4rem auto",
    height: "83vh",
    width: "60vw",
    [theme.breakpoints.down("xs")]: {
      width: "80vw",
    },
    [theme.breakpoints.down("md")]: {
      width: "90vw",
    },
  },
  title: {
    marginTop: "1rem",
    textAlign: "center",
  },
  content: {
    margin: "2rem 1.3rem",
    display: "flex",
    height: "60vh",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  buttonBox: {
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-around",
    width: "12rem",
  },
  textBox: {
    [theme.breakpoints.down("xs")]: {
      width: "10rem",
    },
    [theme.breakpoints.down("md")]: {
      width: "15rem",
      display: "flex",
    },
    "@media screen and (min-width: 1024px)": {
      width: "26rem",
      display: "flex",
    },
    "@media screen and (max-width: 320px)": {
      display: "flex",
    },
    "@media screen and (max-width: 280px)": {
      display: "flex",
      width: "13rem",
    },
  },
}));
function SignUp() {
  const classes = useStyle();
  return (
    <Box className={classes.background}>
      <CssBaseline />{" "}
      <form>
        <Box className={classes.boxStyle}>
          <Wrapper>
            <section className="left">
              <img
                src={process.env.PUBLIC_URL + "/flower.jpg"}
                alt="flower"
                className="img_src"
              />
            </section>
            <section className="right">
              <Typography variant="h3" className={classes.title} gutterBottom>
                Sign-Up
              </Typography>
              <Box className={classes.content}>
                <input
                  className="input-field"
                  type="text"
                  placeholder="아이디를 입력하세요"
                />
                <input
                  className="input-field"
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                />
                <input
                  className="input-field"
                  type="name"
                  placeholder="이름을 입력하세요"
                />
                <input
                  className="input-field"
                  type="email"
                  placeholder="이메일을 입력하세요"
                />
                <Box className={classes.textBox}>
                  <input type="text" className="input-field zipcode-input" />
                  <button className="zip-code">우편번호 검색</button>
                </Box>
                <input type="text" className="input-field " />
                <Box className={classes.buttonBox}>
                  <button className="sign-up">회원가입</button>
                  <button className="clear">초기화</button>
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
    flex: 1;
  }
  .right {
    flex: 1;
  }
  .left .img_src {
    height: 100%;
    max-width: 100%;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .input-field {
    padding: 0.5em;
    border-radius: 10px;
    border: 1px solid #000;
  }
  .sign-up {
    border: none;
    padding: 1em;
    background-color: #fff;
    cursor: pointer;
  }
  .clear {
    border: none;
    padding: 1em;
    background-color: #fff;
    cursor: pointer;
  }
  .zip-code {
    margin-left: 2rem;
    border: none;
    padding: 0.75em;
    background-color: #fff;
    cursor: pointer;
  }
  @media screen and (min-width: 360px) and (max-width: 767px) {
    .left {
      display: none;
    }
    .zipcode-input {
      width: 37vw;
    }
    .zip-code {
      font-size: 0.8rem;
      padding: 0;
      width: 20vw;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    .zipcode-input {
      width: 37vw;
    }
    .zip-code {
      font-size: 0.8rem;
      padding: 0;
      width: 20vw;
    }
  }
  @media screen and (min-width: 1024px) {
    .zipcode-input {
      width: 37vw;
    }
    .zip-code {
      font-size: 0.8rem;
      padding: 0;
      width: 20vw;
    }
  }

  @media screen and (max-width: 320px) {
    .left {
      display: none;
    }
    .zipcode-input {
      width: 40vw;
    }
    .zip-code {
      font-size: 0.7rem;
      padding: 0;
      width: 20vw;
    }
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (max-width: 280px) {
    .left {
      display: none;
    }
  }
`;
export default SignUp;
