import React, { useState } from 'react'
import { Button, Flex, Heading, HStack, Stack } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';

const Navbar = () => {
  let navigate = useNavigate()
  const { userLogged, setUserLogged } = useGlobalContext();
  const loggedOut = () => {
    localStorage.clear()
    setUserLogged(false)
  }
  const closeMenu = () => {
    return setShowMenu(!showMenu)
  }
  const logoutClick = () => {
    loggedOut()
    setShowMenu(!showMenu)
    navigate("/login", { replace: true })
  }
  const [showMenu, setShowMenu] = useState(false);
    return (
      <Stack
      as='header'
      w='100%'
      top='0'
      left='0'
      right='0'
      zIndex='1'
      boxShadow='md'
      >
        <Flex >
          <HStack
            w={{base: '90%', md: '80%'}}
            mx='auto'
            justify='space-between'
            align='center'
            p={5}>
            <Link to='/'>
              <Heading 
              fontWeight="bold"
              color="#2b2c34"
              >
                  Alkemy
              </Heading>
            </Link>
              <Flex>
                <Button variant='ghost' onClick={closeMenu}>
                  {showMenu? 'Close' : 'Menu'}
                </Button>
              </Flex>

          </HStack>
        </Flex>
        <Flex
        as='nav'
        display={showMenu? 'flex' : 'none'}
        direction='column'
        w='100%'
        mx='auto'
        align='center'
        bg='#ffffff'
        >
          {userLogged ?
          <>
          <Link to='/'>
            <Button my={12} variant='link' onClick={closeMenu}>
            Home
            </Button>
          </Link>           
           <Link to='/movements'>
            <Button my={12} variant='link' onClick={closeMenu}>
              Movements
            </Button>
          </Link>
          <Button my={12} variant='link' onClick={ logoutClick }>
            Logout
          </Button>
          </>
          :
          <>
          <Link to='/login'>
            <Button my={12} variant='link' onClick={closeMenu}>
              Login
            </Button>
          </Link>
          <Link to='/register'>
            <Button my={12} variant='link' onClick={closeMenu}>
              Register
            </Button>
          </Link>
          </>
          }
        </Flex>  
      </Stack>  
    )   
}

export default Navbar


