import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import axios from '../../axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('email or password is required');
      setLoading(false);
      return;
    }
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };
      const { data } = await axios.post(
        '/api/user/login',
        { email, password },
        config
      );
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate('/chats');
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
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
