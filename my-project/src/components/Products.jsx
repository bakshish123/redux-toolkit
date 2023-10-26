import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";


const Products = () => {
  const [products, getProducts] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(data => data.json())
      .then(result => getProducts(result));
  }, []);

  const addToCart =(product)=>{
     dispatch(add(product))
  }

  const cards = products.map(product => (
    <div key={product.id} className="col-md-3">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Button variant="primary" onClick={()=>addToCart(product)}>Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  ));

  return (
    <div>
      <h1 className='text-5xl font-semibold text-center'>Products dashboard</h1>
      <div className="flex flex-row flex-wrap justify-center items-center">
        {cards}
      </div>
    </div>
  );
}

export default Products;
