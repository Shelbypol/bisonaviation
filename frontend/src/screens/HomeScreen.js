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

            <CardFlipped imgSrc={aboutImg} imgAlt={''} title={'Bison Aviation'} titleClassName={''} subTitle={'who are we'} text={''} textClassName={''} btnTitle={''} btnClassName={''} />

        </>
    )
};

export default HomeScreen