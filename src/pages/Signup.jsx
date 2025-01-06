import React, { useState } from 'react';
import styled from 'styled-components';

const SignupContainer = styled.div`
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  text-align: left;
  font-size: 14px;
  margin: 10px 0 5px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 14px;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const SignupButton = styled.button`
  padding: 12px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  text-align: left;
`;

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });

  // 이메일 유효성 검사
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email) ? '' : '올바른 이메일 형식을 입력해주세요.';
  };

  // 비밀번호 유효성 검사
  const validatePassword = (password) => {
    return password.length >= 6 ? '' : '비밀번호는 최소 6자 이상이어야 합니다.';
  };

  // 비밀번호 확인 유효성 검사
  const validateConfirmPassword = (confirmPassword, password) => {
    return confirmPassword === password ? '' : '비밀번호와 비밀번호 확인이 일치하지 않습니다.';
  };

  // 이름 유효성 검사
  const validateName = (name) => {
    return name.trim() === '' ? '이름을 입력해주세요.' : '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError({
      email: validateEmail(email),
      password: validatePassword(password),
      confirmPassword: validateConfirmPassword(confirmPassword, password),
      name: validateName(name)
    });
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setError((prev) => ({
      ...prev,
      email: validateEmail(newEmail)
    }));
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setError((prev) => ({
      ...prev,
      password: validatePassword(newPassword)
    }));
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setError((prev) => ({
      ...prev,
      confirmPassword: validateConfirmPassword(newConfirmPassword, password)
    }));
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    setError((prev) => ({
      ...prev,
      name: validateName(newName)
    }));
  };

  return (
    <SignupContainer>
      <Title>이메일로 가입</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="email">이메일</Label>
        <Input
          type="email"
          id="email"
          placeholder="이메일 주소를 입력해주세요."
          value={email}
          onChange={handleEmailChange}
        />
        {error.email && <ErrorMessage>{error.email}</ErrorMessage>}

        <Label htmlFor="password">비밀번호</Label>
        <Input
          type="password"
          id="password"
          placeholder="특수문자, 숫자, 영문자 포함 6자 이상 입력해주세요."
          value={password}
          onChange={handlePasswordChange}
        />
        {error.password && <ErrorMessage>{error.password}</ErrorMessage>}

        <Label htmlFor="confirmPassword">비밀번호 확인</Label>
        <Input
          type="password"
          id="confirmPassword"
          placeholder="동일한 비밀번호를 다시 입력해주세요."
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        {error.confirmPassword && <ErrorMessage>{error.confirmPassword}</ErrorMessage>}

        <Label htmlFor="name">이름</Label>
        <Input
          type="text"
          id="name"
          placeholder="이름을 입력해주세요."
          value={name}
          onChange={handleNameChange}
        />
        {error.name && <ErrorMessage>{error.name}</ErrorMessage>}

        <SignupButton type="submit">가입하기</SignupButton>
      </Form>
    </SignupContainer>
  );
};

export default Signup;
