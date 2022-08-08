import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import {
    FormLabel,
    Input,
    Container,
    Button,
    Heading,
    AlertIcon,
    Alert
  } from '@chakra-ui/react'
  import { useGlobalContext } from '../../context';
  import NotLogged from '../NotLogged/NotLogged';
const EditMovement = () => {
    let navigate = useNavigate()
    const { userLogged } = useGlobalContext();
    const { id } = useParams();
    const [msgError, setMsgError] = useState('');
    const [movementData, setMovementData] = useState({
      concept:'',
      amount:'',
      date:'',
    })
    //Update state
    const handleChange = (e) => {
      setMovementData({
        ...movementData,
        [e.target.name]: e.target.value
      })
    }
    //Update data in DB
    const updateMovement = async (e) => {
        e.preventDefault()
        const {concept, amount, date} = movementData
        if(concept === '' || amount === '' || date === '' ){
          return setMsgError('All fields are required')
        } else {
          await axios.put(`http://localhost:3002/movements/update/${id}`, movementData)
          navigate("/movements", { replace: true });
        }
      }
      
      useEffect(() => {
        getMovementById()
      }, []);

      //Get one item from DB
      const getMovementById = async () => {
        const movementById = await axios.get(`http://localhost:3002/movements/${id}`);
        setMovementData({
          concept: movementById.data[0].concept,
          amount: movementById.data[0].amount,
          date: movementById.data[0].date,
        })
      }
      
      //Modify date
      const date = movementData.date.slice(0, 10);
      
      if(userLogged) {
        return (
          <Container
          minH='100vh'
          py='50px'
          mx='auto'
          >
              <form onSubmit={ updateMovement } mt='150px'>
                  <Heading my='10px'>Edit movement</Heading>
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
                  <Input type='date' value={date || ''} onChange={ handleChange } name='date' />
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

export default EditMovement