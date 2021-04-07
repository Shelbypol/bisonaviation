import React from 'react'
import '../../style/wishListScreen/WishListScreen.css'
import {Container, Jumbotron} from "reactstrap";


const WishListHero = () => {

    return (
<>

        <Jumbotron className='WishListScreen_hero-img min-vw-100 m-0 p-0 d-flex sticky-top justify-content-center align-items-center bg-white'
                   fluid>
            <p className='WishListScreen_title '>Ask the experts!</p>
        </Jumbotron>


    </>
    )
};

export default WishListHero