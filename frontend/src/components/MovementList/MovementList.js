import React, { useState, useEffect }  from 'react';
import { 
    Button, 
    Heading, 
    Box, 
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Select } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useGlobalContext } from '../../context';
import NotLogged from '../NotLogged/NotLogged';
const MovementList = () => {
    const { userLogged } = useGlobalContext();
    const [items, setItems] = useState([]);
    const [type, setType] = useState('')
    let navigate = useNavigate()

    useEffect(() => {
        getAllItems()
    }, [items]);

    //Get items from DB
    const getAllItems = async () => {
      const movements = await axios.get('http://localhost:3002/movements/');
      const userMovements = movements.data.filter(item => item.user_id == localStorage.getItem('id'))
      if(type === 'Ingreso') {
        return setItems(userMovements.filter(item => item.type === 'Ingreso'))
        }
    if(type === 'Egreso') {
        return setItems(userMovements.filter(item => item.type === 'Egreso'))
        }
    else {
        return setItems(userMovements);
        }
    }
    //Delete function
    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:3002/movements/${id}`)
         navigate('/movements', { replace: true })
      }
    if(userLogged) {
        return (
        <Box
        minH='100vh'
        w={{base: '90%', md: '80%'}}
        mx='auto'
        p={5}
        >
            <Heading p={5}>Movements List</Heading>
            <Select onChange={(e) => setType(e.target.value)}>
                    <option >Filter by type</option>                
                    <option >Ingreso</option>
                    <option >Egreso</option>
                </Select>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                    <Tr>
                        <Th>Concept</Th>
                        <Th>Amount</Th>
                        <Th>Edit</Th>
                        <Th>Delete</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                        {items.map(oneItem => {
                        const { id } = oneItem
                        return <Tr key={oneItem.id}>
                                    <Td>{oneItem.concept}</Td>
                                    <Td>{oneItem.amount}</Td>
                                    <Td><Link to={`/edit/${id}`}><Button colorScheme='yellow' variant='outline'>Edit</Button></Link></Td>
                                    <Td><Button colorScheme='red'  onClick={ () => deleteProduct(oneItem.id) }>Delete</Button></Td>
                                </Tr>
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
        )
    }
    if(!userLogged) {
        return(
            <NotLogged />
        )
    }
}

export default MovementList