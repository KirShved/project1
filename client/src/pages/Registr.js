import React from 'react';
import { Form, Container } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card  from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

const Registr = () => {
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
                />
                <Form.Control 
                className='mt-4'
                placeholder='Введите ваш пороль...'
                />
                <div className='d-flex justify-content-between mt-3 pl-3 pr-3'>
                    <div>
                        Уже есть аккаунт? <NavLink to='/autorization'>Войдите!</NavLink>
                    </div>
                    <Button>
                        Войти
                    </Button>
                </div>
            </Form>
        </Card>
    </Container>
  )
}

export default Registr
