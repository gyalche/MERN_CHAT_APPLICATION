import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  StackDivider,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const Signup = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
  });
  const [pic, setPic] = useState();
  const onChangeFun = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const postDetails = (pics) => {};

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <VStack spacing={5} color='black'>
      <FormControl id='first-name' isRequired>
        <FormLabel>username </FormLabel>
        <Input
          placeholder='Enter your name'
          name='name'
          value={data.name}
          onChange={onChangeFun}
        />
      </FormControl>

      <FormControl id='email' isRequired>
        <FormLabel>email </FormLabel>
        <Input
          placeholder='Enter your email'
          name='email'
          value={data.email}
          onChange={onChangeFun}
        />
      </FormControl>

      <FormControl id='password' isRequired>
        <FormLabel>password </FormLabel>
        <Input
          type='password'
          placeholder='Enter your password'
          name='password'
          value={data.password}
          onChange={onChangeFun}
        />
      </FormControl>

      <FormControl id='pic'>
        <FormLabel>Upload your Picture </FormLabel>
        <Input
          type='file'
          accept='image/*'
          p={1.5}
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>

      <Button
        colorScheme='blue'
        width='100%'
        style={{ marginTop: 15 }}
        onClick={submitHandler}>
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
