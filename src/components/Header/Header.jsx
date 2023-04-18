import React, { useState } from "react"
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import "./Header.css"
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: "10px",
    backgroundColor: "#f3f3f3",
    '&:hover': {
      backgroundColor: "#ffffff"
    },
    marginLeft: 0,
    width: '100%',
    height: "3rem",
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    display: 'flex',
    alignItems: 'center',
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));



const Header = props => {
    const navigate = useNavigate();

    const goToCartDetails = ()=>{
      navigate("/cart")
    }
    return (
        <div className="header">
            <img className="header_image" src="/education.png" alt="education" />
            <h1 className="header_heading">Bookstore</h1>
            <div className="header_search">
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon color="action"/>
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </div>
            <div className="header_icons" style={{marginRight: '6rem'}}>
              <Person2OutlinedIcon  sx={{ fontSize: 30, color: 'white' }} />
              <p>Kavya</p>
            </div>
            <div className="header_icons" onClick={goToCartDetails}>
             <AddShoppingCartOutlinedIcon color="white" sx={{ fontSize: 30, color: 'white' }} />
             <p>Cart</p>
             {props.cart && <span className="cart_quantity">{props.cart.books.length}</span>}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
  
  return {
   cart: state.cart.cart,
  };
};

export default connect(mapStateToProps)(Header)