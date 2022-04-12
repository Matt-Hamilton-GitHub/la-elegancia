
import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from 'styled-components'


function Slider() {
  return (
    <Wrapper>
        <Arrow>
            <ArrowBackIosIcon />
        </Arrow>
        <Arrow>
          <ArrowForwardIosIcon />
          </Arrow>
    </Wrapper>
  )
}

export default Slider

const Wrapper = styled.div`
    
    width:100%;
    height:100vh;
    display:flex;
    background-color:coral;
    position:relative;

    .arrow{
      margin: auto;
      width:50px;
      height:50px;
      background-color:#fff7f7;
      border-radius:50%;
      display:flex;
      align-items:center;
      justify-content:center;
      position: absolute;
      top:0;
      bottom:0;
      left:10px;

      
    }

`
const Arrow = styled.div`
   margin: auto;
      width:50px;
      height:50px;
      background-color:#fff7f7;
      border-radius:50%;
      display:flex;
      align-items:center;
      justify-content:center;
      position: absolute;
      top:0;
      bottom:0;
      left:10px;

`

