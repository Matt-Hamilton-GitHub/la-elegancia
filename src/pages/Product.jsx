
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import jumpsuits_denim from '../imgs/jumpsuits-denim.jpg'


function Product() {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Wrapper >
             <ImgContainer>
                <Image src={jumpsuits_denim} />
             </ImgContainer>
             <InfoContainer>
                 <Title>Denim Jumpsuit</Title>
                 <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                       aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                       ullamco laboris nisi ut aliquip ex ea commodo consequat. </Desc>
                 <Price>$75</Price>
                 <FilterContainer>

                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color='black'/>
                        <FilterColor color='darkblue'/>
                        <FilterColor color='grey'/>
                    </Filter> 

                   
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize color='black'>
                            <Option>XS</Option>
                            <Option>S</Option>
                            <Option>M</Option>
                            <Option>L</Option>
                            <Option>XL</Option>
                        </FilterSize>
                        
                    </Filter> 

                 </FilterContainer>
                 <AddContainer>
                     <AmountContainer>
                        <RemoveIcon />
                         <Amount>1</Amount>
                         <AddIcon />
                         
                     </AmountContainer>
                     <Button >ADD TO CART</Button>
                 </AddContainer>
             </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product

const Filter = styled.div`
display:flex;
align-items:center;
`

const FilterTitle = styled.span`
font-size:20px;
font-weight:200;
`

const FilterContainer = styled.div`
display:flex;
justify-content:space-between;
width:70%;
margin:20px 0px;

`

const FilterColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props => props.color};
margin: 0 5px;
cursor:pointer;
`

const FilterSize = styled.select`
margin-left:10px;
padding:5px;
`

const Option = styled.option``


const AddContainer = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
width:70%;
`

const AmountContainer = styled.div`
display:flex;
align-items: center;
font-weight:700;
`

const Amount = styled.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
display:flex;
justify-content:center;
align-items: center;
margin: 10px 5px;
`

const Button = styled.button`
padding:15px;
border:2px solid teal;
background-color:white;
cursor:pointer;
font-weight:500;

&:hover{
    background-color: #f8f4f4;
}

`

const Container = styled.div``

const Wrapper = styled.div`
padding:50px;display:flex;

`

const ImgContainer = styled.div`
flex:1;
`

const Image= styled.img`
width:100%;
height:50vh;
object-fit:cover;
`

const InfoContainer = styled.div`
flex:1;
padding: 0px 50px;
`

const Title= styled.h1`
font-weight:200;
`

const Desc= styled.p`
margin:20px;
`

const Price= styled.span`
font-weight:100;
font-size:40px;
`