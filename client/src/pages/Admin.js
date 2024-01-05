import React from 'react';
import { Button, Container } from 'react-bootstrap';

const Admin = () => {
  return (
    <div>
      <Container className='d-flex flex-column'>
        <Button className='mt-3 mb-3'>Добавить чото 1</Button>
        <Button className='mb-3'>Добавить чото 2</Button>
        <Button className='mb-3'>Добавить чото 3</Button>
      </Container>
    </div>
  )
}

export default Admin
