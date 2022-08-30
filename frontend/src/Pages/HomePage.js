import React from 'react';
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';
const HomePage = () => {
  return (
    <Container maxW='xl' centerContent>
      <Box
        d='flex'
        justifyContent='center'
        p={3}
        w='100%'
        m='40px 0 15px 0'
        borderRadius='lg'
        borderWidth='1px'
        borderColor='grey'
        backgroundColor='white'>
        <Text
          fontSize='4xl'
          fontFamily='Helvetica'
          color='black'
          textAlign='center'>
          Talk-A-Live
        </Text>
      </Box>
      <Box
        bg='white'
        w='100%'
        p={4}
        borderRadius='lg'
        borderWidth='1px'
        color='black'>
        <Tabs variant='soft-rounded'>
          <TabList color='black' mb='1rem'>
            <Tab color='black' width='50%'>
              Login
            </Tab>
            <Tab color='black' width='50%'>
              Signup
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
