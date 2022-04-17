import React from 'react'
import styled from 'styled-components'
import register_image from '../imgs/register-image.jpg'

function Register() {
  return (
    <Container register_image={register_image}>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/> 
                <Agreement>
                    By creating a new account, 
                    I consent to the processing of my personal data in account with the 
                     <b> PRIVATE POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register


const Container = styled.div`

width:100vw;
height:100vh;
background:linear-gradient(rgba(255,255,255,0.7),rgba(255,255,255,0.7)), url(${props =>props.register_image}) center;
display:flex;
align-items: center;
justify-content: center;
background-size: cover;
`
const Wrapper= styled.div`
text-align:  center; 
padding:20px;
width:40%;
max-width: 700px;
background-color:white;

`
const Title = styled.h1`
font-size:24px;
font-weight:300;
`
const Form = styled.form`
display:flex;
flex-wrap:wrap;
justify-content:center;

`
const Input = styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0 0;
padding:10px;

`
const Agreement = styled.span`
font-size:12px;
margin:20px 0;
`
const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;

`
