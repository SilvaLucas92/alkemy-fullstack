import React from 'react'
import { 
    Button, 
    Heading, 
    Text, 
    Box, 
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const NotLogged = () => {
    return(
        <Box   
        w={{base: '90%', md: '80%'}}
        mx='auto'
        p={5}
        >
            <Heading mb={5}>Welcome!</Heading>
            <Text my={5}>If you want to start using the app, please login with your email or register!</Text>
            <Link to='/login'>
                <Button mr={5} colorScheme='teal'>
                    Login
                </Button>
            </Link>
            <Link to='/register'>
                <Button colorScheme='teal' variant='outline'>
                    Register
                </Button>
            </Link>
        </Box>
        )
}

export default NotLogged