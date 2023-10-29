import React from "react";
import styled from "styled-components";
const CompCover = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
  margin: auto;
  min-height: 70vh;

  background-color: white;
  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;
const LoginWrapper = styled.div`
  background-color: white;
  width: 50%;
  //   height: 100%;
  padding: 5rem;
  //   margin: 0 3rem;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media screen and (max-width: 1020px) {
    padding: 2rem;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const ImageCover = styled.div`
  width: 50%;
  //   height: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Title = styled.h2`
  color: gray;
  font-size: 20px;
`;
const Input = styled.input`
  width: 100%;
  padding: 15px 10px;
  border-radius: 10px;
  font-size: 18px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const SubmitButton = styled.button`
  width: 100%;
  color: white;
  padding: 15px 0px;
  border-radius: 10px;
  font-size: 16px;
  border: none;
  background-color: ${props => props.backgroundColor};
`;
function Login() {
  return (
    <CompCover>
      <LoginWrapper>
        <Title>Login </Title>
        <Input type="text" placeholder="Enter username/email" />
        <Input type="password" placeholder="Enter Password" />
        {/* <SubmitButton>Login</SubmitButton> */}
        <SubmitButton backgroundColor="#6aebf9">Submit</SubmitButton>
        <SubmitButton backgroundColor="#2da7e4">
          Login With Facebook
        </SubmitButton>
        <SubmitButton backgroundColor="#c60004">Login With Google</SubmitButton>
      </LoginWrapper>
      <ImageCover>
        <Image src="https://swoopnow.com/wp-content/uploads/2020/07/User-Authentication_-Understanding-the-Basics-Top-Tips.jpg" />
      </ImageCover>
    </CompCover>
  );
}

export default Login;
