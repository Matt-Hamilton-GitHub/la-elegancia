
import React, { useState } from 'react'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import styled from 'styled-components'
import summer_dress from '../imgs/summer-dress-2.jpg'
import winter_dress from '../imgs/winter-dress.jpg'
import slides from '../data'

function Slider() {

  const[slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction)=>{
 
    if(direction === 'left'){
      setSlideIndex(slideIndex > 0 ?slideIndex - 1 : 3)
    }else{
      setSlideIndex(slideIndex < 3 ?slideIndex + 1 : 0)
    }

  }

  return (
    <Wrapper>
        <Arrow direction='left' onClick={()=> handleClick('left')}>
            <ArrowLeftIcon />
        </Arrow>
        <WrapperSlides slideIndex={slideIndex}>
          {slides.map((slide) => {
              const {id, img, title, desc, bg} = slide;

             return(
            
            <Slide bg={bg} key={id}>

               <div className='img-container' >
                    <img src={img} className='image-slider'/> 
                </div>
                <div className='info-container'>
                  <h1>{title}</h1>
                  <p>{desc}</p>
                  <button className=''>SHOP NOW</button>
                </div>
                
            </Slide>
              )

              })
          }
           
        </WrapperSlides>
        <Arrow direction='right'  onClick={()=> handleClick('right')}>
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
      z-index:2;

`

const WrapperSlides = styled.div`
display:flex;
flex-direction:row;
transform: translateX(${props => props.slideIndex * -100}vw);
transition: all 1.5s ease-in-out;
`


const Slide = styled.div`
display:flex;
align-items: center;
width:100vw;
height:100vh;
padding-top:50px;
background-color: #${props => props.bg }
`

