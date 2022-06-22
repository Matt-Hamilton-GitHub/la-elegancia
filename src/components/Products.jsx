import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {popularProducts} from '../data'
import Product from './Product'
import axios from 'axios'

function Products({tagName, filters, sort}) {
  
const [products, setProducts] = useState([]);
const [filteredProd, setFilteredProd] = useState([]);

useEffect(() =>{
  const getProducts = async () => {
    try{
      const res = await axios.get(tagName ? `http://localhost:5000/api/products?category=${tagName}` : `http://localhost:5000/api/products` );
      setProducts(res.data);

    }catch(err){console.log(err);}
  }
  getProducts();
},[tagName])

useEffect(() =>{
  tagName && setFilteredProd(
    products.filter(item => Object.entries(filters).every(([key, value]) =>
    item[key].includes(value)
    ))
  )
},[products, tagName,filters])

useEffect(() =>{
  if(sort === 'newest'){
    setFilteredProd(prev=>
      [...prev].sort((a,b)=>a.createdAt - b.createdAt));
  }else if(sort  === 'asc'){
    setFilteredProd(prev=>
      [...prev].sort((a,b)=>a.price - b.price));
  }else if (sort  === 'desc'){
    setFilteredProd(prev=>
      [...prev].sort((a,b)=>b.price - a.price));
  }
},[sort])

console.log(products);
  return (
    <Container>
     {tagName ? filteredProd.map((item)=>{
       return (<Product item={item} key={item.id}/>)
     }) :  products.slice(0,8).map((item)=>{
      return (<Product item={item} key={item.id}/>)
    })}
    </Container>
  )
}

export default Products

const Container = styled.div`
  padding:20px;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
`