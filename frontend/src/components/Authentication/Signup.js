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
import { useToast } from '@chakra-ui/react';

const Signup = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
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
  const postDetails = (pics) => {
    setLoading(true);
    if (pics === undefined) {
      toast({
        title: 'image is undefined.',
        description: 'upload your image.',
        status: 'warning',
        duration: 5000,
        isClosable: true,
      });
    }
    if (pics.type === 'image/jpeg' || pics.type === 'image/png') {
      const data = new FormData();
      data.append('file', pics);
      data.append('upload_preset', 'chat_app');
      data.append('cloud_name', 'dmn8c8zmh');
      fetch('');
    }
  };

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
