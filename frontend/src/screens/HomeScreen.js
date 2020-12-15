import React from 'react'
import Jumbotrons from "../components/Jumbotrons";
import CardFlippedLeft from "../components/CardFlippedLeft";
import CardFlippedRight from "../components/CardFlippedRight"
import aboutImg from '../images/jumbotron/beachcraft-fin.png'


const HomeScreen = () => {

    window.onbeforeunload = () => {
        localStorage.clear()
    };

    return (
        <>
            <Jumbotrons imgClass={'heroJumbo '} />
            <Jumbotrons imgClass={'fadeJumbo '} />

            <CardFlippedRight imgSrc={aboutImg}
                             imgAlt={''}
                             title={'Bison Aviation'}
                             subTitle={'who are we'}
                             text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem consectetur deleniti dicta dignissimos eligendi laborum, maiores neque, nesciunt nisi non odit perferendis quasi quidem quos recusandae soluta veniam voluptatum.'}
                             btnTitle={'test button'}
                          />

        </>
    )
};

export default HomeScreen