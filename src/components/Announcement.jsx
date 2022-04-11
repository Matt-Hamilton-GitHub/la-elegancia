import React from 'react'
import styled from 'styled-components'


function Announcement() {
  return (
      <Wrapper>
        <h2>Supper Deal! Free Shipping + 30% discount on the first order!</h2> 
        <h2>Don't miss your chance!</h2>
      </Wrapper>
    
  )
}

export default Announcement

const Wrapper = styled.div`
    height: 100%;
    padding: 10px 20px;
    height:auto;
    min-width:100%;
    background-color:teal;
    color:white;
    align-items:center;
    display: flex;
    flex-direction: column;
    font-size:14px;
`

