import React from 'react'
import styled from 'styled-components'
import {categories}  from '../data'
import CategoryItem from './CategoryItem'
import {mobile} from '../responsive'

function Categories() {
  return (
    <Container >
        {categories.map((category)=>{
            return (<CategoryItem category={category} key={category.id}/>)
        })}
    </Container>
  )
}

export default Categories

const Container = styled.div` 
display:flex;
padding:20px;
justify-content: space-between;
${mobile({padding:'0px', flexDirection:'column'})}
`