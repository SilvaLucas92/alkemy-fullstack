import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import {
    FormLabel,
    Input,
    Container,
    Button,
    Heading,
    AlertIcon,
    Alert
  } from '@chakra-ui/react'
import { useGlobalContext } from '../../context'
import { Link } from 'react-router-dom';
const Login = () => {
    // const [userEmail, setUserEmail] = useState('');
    // const [userPassword, setUserPassword] = useState('');
    const [msgError, setMsgError] = useState('');
    let navigate = useNavigate();
    const { setUserLogged } = useGlobalContext();
    const [userData, setUserData] = useState({
        email: '',
        password:''
    })
    //Set state
    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }
    //Send data to DB
    const userLogin = async (e) => {
        try {
            e.preventDefault();
            if(userData.email === '' || userData.password === '') {
                return setMsgError('All fields are required')
            } else {
                // await axios.post('http://localhost:3001/users/login', {
                //     email: userEmail,
                //     password: userPassword
                // })
                await axios.post('http://localhost:3002/users/login', userData)
                .then(res => localStorage.setItem('id', res.data.user.id))
                navigate("/", { replace: true });
                setUserLogged(true)
            }
        } catch (e) {
            setMsgError(e.response.data.msg)
        }
    }
  return (
    <Container
    py='50px'
    mx='auto'
    >   
            <form onSubmit={ userLogin }  mt='150px'>
                <Heading my='10px'>Login</Heading>
                {msgError &&          
                    <Alert borderRadius={5} status='error'>
                        <AlertIcon />
                        {msgError}
                    </Alert>
                }
                <FormLabel>Email adress</FormLabel>
                <Input value={userData.email || ''} onChange={ handleChange } name='email' />
                <FormLabel>Password</FormLabel>
                <Input type='password'  value={userData.password || ''} onChange={ handleChange } name='password' />
                <Button
                mt={4}
                colorScheme='teal'
                type='submit'
                w='full'
                >submit</Button>
                <Link to='/register'>
                    <Button
                    mt={4}
                    colorScheme='teal'
                    type='submit'
                    variant='outline'
                    w='full'
                    >Register</Button>
                </Link>
            </form>
    </Container>
  )
}

export default Login