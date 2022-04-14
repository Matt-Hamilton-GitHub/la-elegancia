import React from 'react'
import styled from 'styled-components'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
function Product({item}) {
  return (
    <Container>
        <Circle />
            <Image src={item.img}/>
         <Info>
            <Icon>
                <ShoppingCartIcon />
            </Icon>
            <Icon>
                <SearchIcon />
            </Icon>
            <Icon>
                <FavoriteBorderIcon />
            </Icon>
          </Info>
    </Container>
  )
}

export default Product


const Info = styled.div`
opacity:0;
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background-color: gray;
z-index:3;
display:flex;
align-items: center;
justify-content:center;
background-color: rgba(0,0,0,0.2);
transition: all 0.5s ease-in-out;



`

const Container = styled.div`
  flex:1;
  margin:5px;
  min-width:280px;
  height:350px;
  display:flex;
  align-items: center;
  justify-content:center;
  background-color:#f5fbfd;
  position:relative;

  &:hover ${Info}{
    opacity:1;
  };

  
`

const Circle = styled.div`
  width:300px;
  height:300px;
  border-radius:50%;
  background-color:white;
  position:absolute;
  
`

const Icon = styled.div`
  width:40px;
  height:40px;
  border-radius:50%;
  display: flex;
  align-items: center;
  justify-content:center;
  margin:10px;
  cursor:pointer;
  transition: all 0.5s ease;
  background-color:white;

  &:hover{
      background-color:#e9f5f5;
      transform: scale(1.1);
  }

  
`

const Image = styled.img`
  height:75%;
  width: 200px;
  object-fit:cover;
  z-index:2;

  
`
