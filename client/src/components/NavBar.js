import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-bootstrap';
import {Button} from 'react-bootstrap'
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import {useNavigate} from 'react-router-dom';

const NavBar =observer( () => {
    const {user}=useContext(Context)
    const navigate=useNavigate()
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavLink style={{color:'white'}} onClick={()=>navigate('/')}>ПОСМОТРИ</NavLink>
            {user.isAuth?
            <Nav className="ml-auto">
                <Button variant={'outline-light'} className='ml-5' onClick={()=>navigate('/admin')}>Админ</Button>
                <Button variant={'outline-light'} className='ml-5' onClick={()=>navigate('/')}>Выйти</Button>
            </Nav>
          :
          <Nav className="ml-auto">
                <Button variant={'outline-light'} onClick={()=>navigate('/registration')}>Регистрация </Button>
                <Button variant={'outline-light'} onClick={()=>navigate('/autorization')}>Войти</Button>
            </Nav>
            }       
        </Container>
    </Navbar>
  )
})

export default NavBar
