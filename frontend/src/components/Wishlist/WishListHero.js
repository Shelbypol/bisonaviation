import React from 'react'
import './WishListScreen.css'
import {Container, Jumbotron} from "reactstrap";


const WishListHero = () => {

    return (
<>

        <Jumbotron className='WishListScreen_hero-img min-vw-100 mt-0 mx-0 mb-n2 p-0 d-flex position-relative justify-content-center align-items-center bg-white'
                   fluid>
            <p className='WishListScreen_title '>Ask the experts!</p>
        </Jumbotron>


    </>
    )
};

export default WishListHero