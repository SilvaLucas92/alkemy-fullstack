import React, { useState } from 'react'
import axios from 'axios'
import {
    FormLabel,
    Input,
    Container,
    Button,
    Heading,
    AlertIcon,
    Alert
  } from '@chakra-ui/react'
import { useNavigate  } from 'react-router-dom';
const Register = () => {
    // const [userName, setUserName] = useState('')
    // const [userEmail, setUserEmail] = useState('')
    // const [userPassword, setUserPassword] = useState('')
    let navigate = useNavigate()
    const [msgError, setMsgError] = useState('')
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
    });
    //Update State
    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }
    //Register user in DB
    const registerUser = async (e) => {
        try {
            e.preventDefault();
            const {name, email, password} = userData
            if (name === '' || email === '' || password === '') {
                setMsgError('All fields are required')
            } else {
                await axios.post('http://localhost:3002/users/register', userData)
                navigate("/login", { replace: true });
            }
        } catch (e) {
            if(e.response) {
                setMsgError(e.response.data.msg)
            }
        }
    }

  return (
        <Container
        py='50px'
        mx='auto'
        >
            <form onSubmit={ registerUser }  mt='150px'>
            <Heading my='10px'>Register</Heading>
            {msgError &&          
                    <Alert borderRadius={5} status='error'>
                        <AlertIcon />
                        {msgError}
                    </Alert>
                }
            <FormLabel>Name or Username</FormLabel>
                <Input value={userData.name || ''} onChange={ handleChange } name='name' />
                <FormLabel>Email adress</FormLabel>
                <Input value={userData.email || ''} onChange={ handleChange } name='email' />
                <FormLabel>Password</FormLabel>
                <Input type='password' value={userData.password || ''} onChange={ handleChange } name='password' />
                <Button
                mt={4}
                colorScheme='teal'
                type='submit'
                w='full'
                >submit</Button>
            </form>
        </Container>
  )
}

export default Register