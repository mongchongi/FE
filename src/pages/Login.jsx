import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #d9d9d9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin: 10px 0 5px;
  text-align: left;
  font-size: 14px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  margin-top: 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
  background-color: ${(props) => props.bgColor || '#7a7a7a'};
  &:hover {
    opacity: 0.9;
  }
`;

const Login = () => {
  return (
    <LoginContainer>
      <Title>로그인</Title>
      <Form>
        <Label htmlFor="email">이메일</Label>
        <Input type="email" id="email" placeholder="이메일" />
        
        <Label htmlFor="password">비밀번호</Label>
        <Input type="password" id="password" placeholder="비밀번호" />

        <Button bgColor="#7a7a7a">로그인</Button>
        <Button bgColor="#fff" style={{ color: '#7a7a7a', border: '1px solid #ccc' }}>
          Google 간편로그인
        </Button>
        <Button bgColor="#bdbdbd">회원가입</Button>
      </Form>
    </LoginContainer>
  );
};

export default Login;