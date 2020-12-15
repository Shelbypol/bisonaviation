import React from 'react'
import Jumbotrons from "../components/Jumbotrons";
import CardFlippedLeft from "../components/CardFlippedLeft";
import CardFlippedRight from "../components/CardFlippedRight"
import aboutImg from '../images/jumbotron/beachcraft-fin.png'
import maintenance from '../images/activeImg/cirrusrobin2.jpg'


const HomeScreen = () => {

    window.onbeforeunload = () => {
        localStorage.clear()
    };

    return (
        <>
            <Jumbotrons imgClass={'heroJumbo '}/>
            <Jumbotrons imgClass={'fadeJumbo '}/>

            <CardFlippedRight imgSrc={aboutImg}
                              imgAlt={''}
                              title={'Bison Aviation'}
                              subTitle={'who are we'}
                              text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem consectetur deleniti dicta dignissimos eligendi laborum, maiores neque, nesciunt nisi non odit perferendis quasi quidem quos recusandae soluta veniam voluptatum.'}
                              btnTitle={'test button'}
            />
            {/*<Jumbotrons imgClass={'fadeCardJumbo '}/>*/}
            <div className='fadeCardRight'> </div>

            <CardFlippedLeft imgSrc={maintenance}
                              imgAlt={''}
                              title={'Avionics'}
                              subTitle={'who are we'}
                              text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem consectetur deleniti dicta dignissimos eligendi laborum, maiores neque, nesciunt nisi non odit perferendis quasi quidem quos recusandae soluta veniam voluptatum.'}
                              btnTitle={'Avionics'}
            />
            {/*<Jumbotrons imgClass={'fadeCardJumbo '}/>*/}
            <div className='fadeCardLeft'> </div>

            <CardFlippedRight imgSrc={maintenance}
                              imgAlt={''}
                              title={'Maintenance'}
                              subTitle={'who are we'}
                              text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem consectetur deleniti dicta dignissimos eligendi laborum, maiores neque, nesciunt nisi non odit perferendis quasi quidem quos recusandae soluta veniam voluptatum.'}
                              btnTitle={'test button'}
            />
            {/*<Jumbotrons imgClass={'fadeCardJumbo '}/>*/}
           <div className='fadeCardRight'> </div>

        </>
    )
};

export default HomeScreen