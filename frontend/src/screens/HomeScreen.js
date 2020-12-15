import React from 'react'
import Jumbotrons from "../components/Jumbotrons";
import CardFlipped from "../components/CardFlipped";
import aboutImg from '../images/jumbotron/beachcraft-fin.png'


const HomeScreen = () => {

    window.onbeforeunload = () => {
        localStorage.clear()
    };

    return (
        <>
            <Jumbotrons imgClass={'heroJumbo '} />
            <Jumbotrons imgClass={'fadeJumbo '} />

            <CardFlipped imgSrc={aboutImg}
                         imgAlt={''}
                         imgClassName={' img-fluid imgCard'}
                         title={'Bison Aviation'}
                         titleClassName={''}
                         subTitle={'who are we'}
                         text={'this is some text'}
                         textClassName={''}
                         btnTitle={'test button'}
                         btnClassName={''} />

        </>
    )
};

export default HomeScreen