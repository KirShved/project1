import React, {useContext} from 'react';
import { Form, Container } from 'react-bootstrap';
import {NavLink, useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card  from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { registration } from '../http/userApi';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

const Registr = observer(() => {

    const {user}=useContext(Context)
    const navigate= useNavigate()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()

    const click=async()=>{
        try{
        let data
        data=await registration(email,password)
        user.setUser(user)
        user.setIsAuth(true)
        navigate('/yaauth')
        }catch(e){
            alert('Пользователь с таким именем уже существует')
        }
    }

  return (
    <Container 
    className='d-flex justify-content-center align-items-center'
    style={{height:window.innerHeight-54}}>
        <Card style={{width:600}} className='p-5'>
            <h2 className='m-auto'>Регистрация</h2>
            <Form className='d-flex flex-column'>
                <Form.Control 
                className='mt-4'
                placeholder='Введите ваш email...'
                value={email}
                onChange={e=>setEmail(e.target.value)}
                />
                <Form.Control 
                className='mt-4'
                placeholder='Введите ваш пороль...'
                value={password}
                onChange={e=>setPassword(e.target.value)}
                />
                <div className='d-flex justify-content-between mt-3 pl-3 pr-3'>
                    <div>
                        Уже есть аккаунт? <NavLink to='/autorization'>Войдите!</NavLink>
                    </div>
                    <Button onClick={click}>
                        Регистрация
                    </Button>
                </div>
            </Form>
        </Card>
    </Container>
  )
}
)

export default Registr
