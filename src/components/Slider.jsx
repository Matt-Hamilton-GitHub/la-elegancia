
import React from 'react'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import styled from 'styled-components'
import summer_dress from '../imgs/summer-dress-2.jpg'

function Slider() {
  return (
    <Wrapper>
        <Arrow direction='left'>
            <ArrowLeftIcon />
        </Arrow>
        <div className='wrapper-slides'>
            <Slide bg='fcf1ed'>

                <div className='img-container'>
                    <img src={summer_dress} className='image-slider'/> 
                </div>
                <div className='info-container'>
                  <h1>SUMMER SALE</h1>
                  <p>DON'T COMPROMISE ON STYLE? GET FALT 30% OFF FOR NEW ARRIVALS.</p>
                  <button className=''>SHOP NOW</button>
                </div>
            </Slide>

            <Slide bg='fcf1ed'>

                <div className='img-container'>
                    <img src={summer_dress} className='image-slider'/> 
                </div>
                <div className='info-container'>
                  <h1>WINTER SALE</h1>
                  <p>DON'T COMPROMISE ON STYLE? GET FALT 30% OFF FOR NEW ARRIVALS.</p>
                  <button className=''>SHOP NOW</button>
                </div>
            </Slide>

            <Slide bg='fcf1ed'>

                <div className='img-container'>
                    <img src={summer_dress} className='image-slider'/> 
                </div>
                <div className='info-container'>
                  <h1>FALL SALE</h1>
                  <p>DON'T COMPROMISE ON STYLE? GET FALT 30% OFF FOR NEW ARRIVALS.</p>
                  <button className=''>SHOP NOW</button>
                </div>
            </Slide>




        </div>
        <Arrow direction='right'>
          <ArrowRightIcon />
          </Arrow>
    </Wrapper>
  )
}

export default Slider

const Wrapper = styled.div`
    
    width:100%;
    height:100vh;
    display:flex;
    position:relative;
    overflow:hidden;

.wrapper-slides{
display:flex;
flex-direction:row;
}

.img-container{
flex:1;
height:100%;
}


.info-container{
flex:1;
padding:50px;
}


.info-container > h1{
  font-size:70px;
}

.info-container > p{
  margin:50px 0px;
  font-size:20px;
  font-weight:500;
  letter-spacing: 3px;
}

.info-container > button{
  padding :10px;
  font-size: 20px;
  background-color: transparent;
  border: 2.5px #FCD900 solid;
  cursor:pointer;
}
.img-container  > img{
height:80%;
object-fit:fit;
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
      left:${props => props.direction === 'left' && '10px'};
      right: ${props => props.direction === 'right' && '10px'};
      cursor:pointer;
      opacity:0.5;

`

const Slide = styled.div`
  display:flex;
align-items: center;
width:100vw;
height:100vh;
background-color: #${props => props.bg }
`

