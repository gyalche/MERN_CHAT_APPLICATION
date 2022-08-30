import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <VStack spacing={5} color='black'>
      <FormControl id='email' isRequired>
        <FormLabel>email </FormLabel>
        <Input
          placeholder='Enter your email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id='password' isRequired>
        <FormLabel>password </FormLabel>
        <Input
          type='password'
          placeholder='Enter your password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>

      <Button
        colorScheme='blue'
        width='100%'
        style={{ marginTop: 15 }}
        onClick={submitHandler}>
        Login
      </Button>

      <Button
        colorScheme='red'
        width='100%'
        style={{ marginTop: 15 }}
        onClick={() => {
          setEmail('guest@example.com');
          setPassword('123456');
        }}>
        Get Gues User Credentials
      </Button>
    </VStack>
  );
};

export default Login;
