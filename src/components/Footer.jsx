import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import MapIcon from '@mui/icons-material/Map';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import {mobile} from '../responsive'

function Footer() {
  return (
    <Container>
        <Left >
            <Logo>la Elegancia</Logo>
            <Desc>la Elegancia is brand that outlines the details and features of every individual enriching every personality with unique approaches to their closets  .</Desc>
        
        <SocialContainer >
            <SocialIcon color='3b5999'>
                <FacebookIcon  />
            </SocialIcon>
            <SocialIcon color='e4405f'>
                <InstagramIcon  />
            </SocialIcon>
            <SocialIcon color='55acee'>
                <TwitterIcon  />
            </SocialIcon>
            <SocialIcon  color='e60023'>
                <PinterestIcon />
            </SocialIcon>
            

        </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem> Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>



            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem> <MapIcon style={{marginRight:'5px'}}/> 622 Dixie Street, Los Angeles, CA, 91001</ContactItem>
            <ContactItem><PhoneAndroidIcon style={{marginRight:'5px'}}/> +1 234 56 789</ContactItem>
            <ContactItem><AlternateEmailIcon style={{marginRight:'5px'}}/> mett4dev@gmail.com</ContactItem>
            <Payment src='https://cdn11.bigcommerce.com/s-x7habvccrj/product_images/uploaded_images/payment-methods.png'/>
        </Right>
    </Container>
  )
}

export default Footer


const Container = styled.div`
display:flex;
${mobile({flexDirection:'column'})}
`

const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`

const Right = styled.div`
flex:1;
padding:20px;
${mobile({background:'#fff8f8'})}
`

const Center = styled.div`
flex:1;
padding:20px;
${mobile({display: 'none'})}
`

const Logo = styled.h1`

`
const Desc = styled.p`
margin:20px 0;
`
const SocialContainer = styled.div`
display:flex;


`
const  Title = styled.h3`
margin-bottom:20px;

`
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display: flex;
    flex-wrap:wrap ;

`
const ListItem = styled.li`
width:50%;
margin-bottom:10px;


    
`
const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:#${props => props.color};
display:flex;
text-align:center;
justify-content:center;
margin-right:20px;
color:white;


`

const ContactItem = styled.div`
margin-bottom:20px;
display:flex;
`
const Payment = styled.img`
width:250px;
`