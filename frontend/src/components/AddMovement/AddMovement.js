import React, { useState } from 'react'
import axios from 'axios'
import {
  FormLabel,
  Input,
  Container,
  Button,
  Heading,
  Select,
  AlertIcon,
  Alert
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from '../../context';
import NotLogged from '../NotLogged/NotLogged';
const AddMovement = () => {
    let navigate = useNavigate();
    const { userLogged } = useGlobalContext();
    const [msgError, setMsgError] = useState('');
    const [movementData, setMovementData] = useState({
      concept:'',
      amount:'',
      date:'',
      type:'',
    })
    //Add data to State
    const handleChange = (e) => {
      setMovementData({
        ...movementData,
        [e.target.name]: e.target.value
      })
    }
    //Add data to DB
    const handleSubmit = async (e) => {
      e.preventDefault();
      const {concept, amount, date, type} = movementData
      if(concept === '' || amount === '' || date === '' || type === '' ){
        return setMsgError('All fields are required')
      } else {
        await axios.post('http://localhost:3002/movements/add', {
          ...movementData,
          user_id: localStorage.getItem('id')
        })
        navigate("/", { replace: true });
      }
    }
    if(userLogged) {
      return (
        <Container
        minH='100vh'
        py='50px'
        mx='auto'
        >
          <form onSubmit={ handleSubmit }  mt='150px'>
              <Heading my='10px'>Add a new movement</Heading>
              {msgError &&          
                      <Alert borderRadius={5} status='error'>
                          <AlertIcon />
                          {msgError}
                      </Alert>
                  }
              <FormLabel>Concept</FormLabel>
              <Input value={movementData.concept || ''} onChange={ handleChange } name='concept' />
              <FormLabel>Amount</FormLabel>
              <Input value={movementData.amount || ''} onChange={ handleChange } name='amount' />
              <FormLabel>Date</FormLabel>
              <Input type='date' value={movementData.date || ''} onChange={ handleChange } name='date' />
              <FormLabel>Select Type</FormLabel>
              <Select onChange={ handleChange } name='type' >
                <option ></option>                
                <option >Ingreso</option>
                <option >Egreso</option>
              </Select>
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
    if(!userLogged) {
      return(
        <NotLogged />
      )
    }
}

export default AddMovement