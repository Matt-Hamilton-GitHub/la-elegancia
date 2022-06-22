import React, {useState} from 'react'
import {useLocation} from 'react-router-dom';
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import {mobile} from '../responsive'

function ProductList() {
    const tagName = useLocation().pathname.split("/")[2];
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState('newest')


    const handleFilters = (e) =>{
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        })
    }

    
    
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter> 
                <FilterText> Filter Products</FilterText>
                <Select 
                onChange={handleFilters}
                name='color'
                >
                    <Option disabled  >Color</Option>
                    <Option>white</Option>
                    <Option>black</Option>
                    <Option>red</Option>
                    <Option>blue</Option>
                    <Option>yellow</Option>
                    <Option>green</Option>
                </Select>
                <Select
                onChange={handleFilters}
                name='size' >
                    <Option disabled  >Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText> Sort Products:</FilterText>
                <Select
                onChange={e=>setSort(e.target.value)}>
                    <Option value='newest'>Newest</Option>
                    <Option value='asc'>Price (asc)</Option>
                    <Option value='desc'>Price (desc)</Option>
                </Select>
                
                </Filter>
        </FilterContainer>
        <Products tagName={tagName} filters={filters} sort={sort}/>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList

const Select = styled.select`
margin-left:20px;
padding:10px;
border: NONE;
`
const Option = styled.option`
padding:20px;
`

const Container = styled.div`

`
const Title = styled.h1`
margin:20px;
`
const FilterContainer = styled.div`
display:flex;
justify-content:space-between;
border-bottom:1px solid teal;

`
const Filter = styled.div`
margin:20px;
${mobile({margin:'0px 20px', display: 'flex', flexDirection:'column'})}
`

const FilterText = styled.span`
    font-size:20px;
    font-weight:600;
    margin-right:20px;
    ${mobile({marginRight:'0px'})}
`