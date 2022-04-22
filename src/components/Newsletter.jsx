import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';
import {mobile} from '../responsive'

function Newsletter() {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favorite products.</Description>
        <InputContainer>
            <Input placeholder="Enter Email"/>
            <Button >
                <SendIcon />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter


const Container = styled.div`
    
height:40vh;
background-color:#fcf5f5;
display:flex;
text-align:center;
justify-content:center;
flex-direction:column;


`

const Title = styled.h1`
    font-size:70px;
    margin:20px;
    ${mobile({fontSize:'50px'})};

`
const Description = styled.div`
   font-size:24px;
   font-weight: 300;
   margin-bottom:20px;
   ${mobile({fontSize:'25px'})}
  
`
const InputContainer = styled.div`
    
    width:30%;
    height: 40px;
    display:flex;
    background-color:white;
    text-align:center ;
    justify-content:space-between;
    border: 1px solid lightgrey;
    margin-left:35% ;
    ${mobile({width:'40%'})}

`
const Input = styled.input`
    
border:none;
flex:8;
padding-left:20px;

`
const Button = styled.button`
    
    flex:1;
    border:none;
    background-color:teal;
    color:white;


`
