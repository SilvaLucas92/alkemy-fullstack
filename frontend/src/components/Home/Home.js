import React, { useState, useEffect } from 'react'
import { 
    Button, 
    Flex, 
    Heading, 
    Text, 
    Box, 
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    TableCaption,
    chakra } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useGlobalContext } from '../../context';
import NotLogged from '../NotLogged/NotLogged';
const Home = () => {
    const [items, setItems] = useState([]);
    const { userLogged } = useGlobalContext();
    const [balance, setBalance] = useState(0)
    const [lastTenItems, setLastTenItems] = useState([])

    useEffect(() => {
        getAllItems()
        balanceTotal()
    }, [balance, lastTenItems]);
    
    //Get all data from DB
    const getAllItems = async () => {
      const movements = await axios.get('http://localhost:3002/movements/');
      setItems(movements.data.filter(item => item.user_id == localStorage.getItem('id')));
      setLastTenItems(items.splice(0, 10))
    }
    //Calculate balance
    const balanceTotal = () => {
        let ingresos = items.filter(item => item.type === 'Ingreso').reduce((total, acum) =>{
            return total + Number(acum.amount)
        }, 0)
        let egresos = items.filter(item => item.type === 'Egreso').reduce((total, acum) =>{
            return total + Number(acum.amount)
        }, 0)
        let total = ingresos - egresos
        return setBalance(total)
        }

    //User logged
    if(userLogged) {
        return(
            <Box
            minH='100vh'
            w={{base: '90%', md: '80%'}}
            mx='auto'
            p={5}
            >
                <Heading px={5}>Expenses App</Heading>
                <Text fontSize='2xl' p={5}>Your balance is: $<chakra.span color={balance >= 0? '#38A169' : '#E53E3E'}>{balance}</chakra.span></Text>
                <TableContainer>
                    <Table variant='simple'>
                        <TableCaption>Last ten movements</TableCaption>
                        <Thead>
                        <Tr>
                            <Th>Concept</Th>
                            <Th >Amount</Th>
                            <Th>Date</Th>
                            <Th>Type</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                            {lastTenItems.map((oneItem) => {
                                    return <Tr key={oneItem.id}>
                                                <Td>{oneItem.concept || ''}</Td>
                                                <Td>{oneItem.amount || ''}</Td>
                                                <Td>{oneItem.date.slice(0, 10) || ''}</Td>
                                                <Td>{oneItem.type || ''}</Td>
                                            </Tr>
                            })}
                        </Tbody>
                    </Table>
                </TableContainer>
                <Flex 
                w='100%'
                justify='center'
                gap='20px'
                my='50px'
                >
                    <Link to="/add">
                        <Button colorScheme='teal' variant='solid'>Add</Button>
                    </Link>
                    <Link to="/movements">
                        <Button colorScheme='teal' variant='outline'>All movements</Button>
                    </Link>
                </Flex>
            </Box>
        )
    }
    //User not logged
    if(!userLogged) {
        return(
            <NotLogged />
        )
    }
}

export default Home