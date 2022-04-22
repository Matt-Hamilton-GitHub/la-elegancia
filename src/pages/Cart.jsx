
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {mobile} from '../responsive'



function Cart() {
  return (
    <Container>
        <Announcement />
        <Navbar/>
        <Wrapper>
             <Title>YOUR BAG</Title>  
             <Top>
                 <TopButton>CONTINUE SHOPPING</TopButton>
                 <TopTexts>
                     <TopText>Shopping Bag (4)</TopText>
                     <TopText>Your Wish List (0)</TopText>
                 </TopTexts>
                 <TopButton type='filled'>CHECKOUT NOW</TopButton>
            </Top> 
             <Bottom >
                 <Info>

                     <Product>
                        <ProductDetail>
                            <Image src='https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background-thumb.png'/>
                            <Details>
                                <ProductName><b>Product:</b>JESSIE THUNDER SHOES</ProductName>
                                <ProductId><b>ID:</b>56710</ProductId>
                                <ProductColor color='#1b7eb8'/>
                                <ProductSize><b>Size:</b>9.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <AddIcon/>
                                <ProductAmount>2</ProductAmount>
                                <RemoveIcon/>
                            </ProductAmountContainer>
                            <ProductPrice>$125</ProductPrice>
                        </PriceDetail>
                     </Product>

                    <Hr/>

                     <Product>
                        <ProductDetail>
                            <Image src='data:image/jpeg;base64,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'/>
                            <Details>
                                <ProductName><b>Product:</b>Lather Jacket Style Style M1</ProductName>
                                <ProductId><b>ID:</b>56734</ProductId>
                                <ProductColor color='#44b2f3'/>
                                <ProductSize><b>Size:</b>M</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <AddIcon/>
                                <ProductAmount>2</ProductAmount>
                                <RemoveIcon/>
                            </ProductAmountContainer>
                            <ProductPrice>$750</ProductPrice>
                        </PriceDetail>
                     </Product>

                 </Info>
                 <Summary>
                     <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                     <SummaryItem>
                         <SummaryItemText>Subtotal</SummaryItemText>
                         <SummaryItemPrice>$875</SummaryItemPrice>
                     </SummaryItem>

                     <SummaryItem>
                         <SummaryItemText>Estimated Shipping</SummaryItemText>
                         <SummaryItemPrice>$15</SummaryItemPrice>
                     </SummaryItem>

                     <SummaryItem>
                         <SummaryItemText>Shipping Discount</SummaryItemText>
                         <SummaryItemPrice>-$15</SummaryItemPrice>
                     </SummaryItem>

                     <SummaryItem type='total'>
                         <SummaryItemText >Total</SummaryItemText>
                         <SummaryItemPrice>$875</SummaryItemPrice>
                     </SummaryItem>

                     <Button>CHECKOUT</Button>
                 </Summary>
             </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart



const Container  = styled.div``

const Wrapper  = styled.div`
padding:20px;
${mobile({padding:'10px'})}
`

const Title  = styled.h1`
font-weight:300;
text-align:center;
`
const Top  = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;
`
const TopButton = styled.button`
padding:10px;
font-weight: 600;
cursor:pointer;
border: ${props => props.type === 'filled' && "none"};
background-color: ${props => props.type === 'filled' ? "black" : 'transparent'};
color: ${props => props.type === 'filled' && "white"};
`

const Bottom  = styled.div`
display:flex;
justify-content:space-between;
${mobile({flexDirection:'column'})};

`

const TopTexts  = styled.div`
${mobile({display: 'none'})}
`
const TopText  = styled.span`
text-decoration:underline;
cursor:pointer;
margin: 0 10px;
`

const Info  = styled.div`
flex:3;
`
const Hr = styled.hr`
background-color:#eee;
border:none;
height:1px;
`

const Summary  = styled.div`
flex:1;
border:0.5px solid lightgray;
border-radius:10px;
padding:20px;
height:50vh;
`
const Product = styled.div`
display:flex;
justify-content:space-between;
${mobile({flexDirection:'column'})}
`
const ProductDetail = styled.div`
flex:2;
display:flex;
`
const Image  = styled.img`
width:200px;

`
const Details  = styled.div`
padding:20px;
display:flex;
flex-direction: column;
justify-content:space-around;
`
const ProductName  = styled.span``
const ProductId  = styled.span``
const ProductColor  = styled.div`
width:20px;
height: 20px;
border-radius:50%;
background-color: ${props => props.color};

`
const ProductSize = styled.span``
const PriceDetail = styled.div`
flex:1;
display:flex;
align-items:center;
flex-direction: column;
justify-content:center;
`

const ProductAmountContainer  = styled.div`
display:flex;
align-items:center;
margin-bottom:20px;

`
const ProductAmount = styled.div`
font-size:24px;
margin:5px;
${mobile({margin:'5px 15px'})}
`
const ProductPrice  = styled.div`
font-size:30px;
font-weight:200;
${mobile({marginBottom:'20px'})}
`
const SummaryTitle = styled.h1`
font-weight:200;
`
const SummaryItemText = styled.span``
const SummaryItem = styled.div`
margin:20px 0;
display:flex;
justify-content:space-between;
font-weight: ${props => props.type === 'total' && '500'};
font-size: ${props => props.type === 'total' && '24px'};

`
const SummaryItemPrice = styled.span``
const Button = styled.button`
width:100%;
padding:10px;
background-color: #5e5e64d5;
color:white;
font-weight:600;

`