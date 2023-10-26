import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { useDispatch } from 'react-redux';
import {remove} from '../store/cartSlice'
import {useSelector} from 'react-redux'

const Cart = () => {
  const products = useSelector(state=>state.cart)
  const dispatch = useDispatch();
  const removeToCart = (id=>{
   dispatch(remove(id));
  })
  const cards = products.map(product => (
    <div key={product.id} className="col-md-3">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Button variant="primary" onClick={()=>removeToCart(product.id)}>Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  ));

  return (<>
    <div className='text-5xl font-semibold text-center'>Cart</div>
    {cards}
    </>
  )
}

export default Cart