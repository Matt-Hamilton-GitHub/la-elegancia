import React from 'react'
import styled from 'styled-components'
import login_image from '../imgs/log-in.jpg'

function Login() {
  return (
    <Container login_image={login_image}>
        <Wrapper>
            <Title>Log In</Title>
            <Form>
                <Input placeholder="username"/> 
                <Input placeholder="password"/>
                <Button>Log In</Button>
            </Form>
            <Link>DON'T REMEMBER THE PASSWORD ?</Link>
            <Link>FORGOT YOUR USERNAME ?</Link>
        </Wrapper>
    </Container>
  )
}

export default Login



const Container = styled.div`

width:100vw;
height:100vh;
background:linear-gradient(rgba(255,255,255,0.7),rgba(255,255,255,0.7)), url(${props =>props.login_image}) center;
display:flex;
align-items: center;
justify-content: center;
background-size: cover;
`
const Wrapper = styled.div`
text-align:  center; 
display: flex;
flex-direction: column;
padding:20px;
width:40%;
max-width: 700px;
background-color:white;

`
const Title = styled.h1`
font-size:24px;
font-weight:900;
`
const Form = styled.form`
display:flex;
justify-content:center;
flex-direction:column;
align-items: center;

`
const Input = styled.input`
flex:2;
min-width:40%;
margin:20px 10px 0 0;
padding:10px;

`

const Button = styled.button`
margin:20px;
flex:1;
width:25%;
min-width:100px;
border:none;
padding:10px 20px;
background-color:teal;
color:white;
cursor:pointer;

`
const Link = styled.a`
   margin:5px 0px;
   font-size:12px;
   cursor:pointer;
   font-weight:600;
   text-decoration: underline;
`