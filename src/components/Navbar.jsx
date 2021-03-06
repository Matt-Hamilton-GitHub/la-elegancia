import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { MenuItem } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {mobile} from '../responsive'
import MenuIcon from '@mui/icons-material/Menu';


function Navbar() {
  return (
    <Wrapper>
        <div className="navbar">
            <div className="navbar-left">
                <span className="language">EN</span>
                <div className="search">
                    <SearchIcon style={{color:'grey', fontSize:16}}/>
                    <div className='nav-input'>
                        <input className='nav-input' placeholder="search item" />
                    </div>
                </div>
            </div>
            <div className="navbar-center">
                <div className="logo">
                    <h1>la Elegancia</h1>
                </div>
            </div>
            <div className="navbar-right">
                <div className="menu-item">
                    <MenuItem >Register</MenuItem>
                    <MenuItem >Sign in</MenuItem>

                    <MenuItem >
                        <Badge badgeContent={4} color='primary'>
                            <ShoppingCartIcon/>
                        </Badge>
                    </MenuItem>
                </div>
                <div className="menu-icon">
                    <MenuIcon/>
                </div>
            </div>
        </div>
        
    </Wrapper>
  )
}

export default Navbar

const Wrapper = styled.div`

height:60px;

${mobile({height:'50px'})}


*{
    margin:0;
}



.navbar{
    padding:10px 20px;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items:center;
    
}

.navbar-left{
    flex:1;
    display:flex;
    align-items: center;
}
.navbar-center{
    
    flex:2;
    text-align:center;
    margin-left: 10px;
}
.navbar-right{
    display:flex;
    align-items: center;
    flex:1;
    margin-left: 3px;
    justify-content:flex-end;
    ${mobile({justifyContent:'center'})}
}

.language{
    font-size:14px;
    cursor:pointer;
    ${mobile({display:'none'})};
}

.search{
border:0.5px solid lightgrey;
display:flex;
align-items: center;
margin-left:25px;
padding:5px;
}

.nav-input{
    border:none;
    ${mobile({width:'100px'})};
    
}

.logo  >h1{
    font-size: bold;
    /* font-family: 'Bitter', serif; */


/* font-family: 'Nunito Sans', sans-serif; */
font-family: 'Quicksand', sans-serif;
${mobile({fontSize:'20px'})}

}

.logo{
    display:flex;
    justify-content:center;
    text-align:center;
}

.menu-item{
    display:flex;
    font-size:14px;
    cursor:pointer;
    align-items: center;
    justify-content: flex-end;
    margin-left:25px;
    ${mobile({display:'none'})};
}

.menu-icon{
    display:none;
    width:100px;
   ${mobile({display:'flex'})};
   ${mobile({justifyContent:'flex-end'})}
}


/* @media screen and (max-width: 600px) {
.languages{
    display:none;
}

} */


`