import React from 'react'
import '../../style/wishListScreen/WishListScreen.css'
import {Container, Jumbotron} from "reactstrap";


const WishListHero = () => {

    return (


        <Jumbotron className='WishListScreen_hero-img d-flex justify-content-center align-items-center bg-white'
                   fluid>
            <p className='WishListScreen_title '>Ask the experts!</p>
        </Jumbotron>

    )
};

export default WishListHero