import React from 'react'
import '../style/HeroDivider.css';
import {Jumbotron, Image, Row, Col} from "react-bootstrap";
import graphic from '../images/bg-graphics/graphics/black-top-large-left.png'

const HeroDivider = ({img, showImg, showDivider, textColor, title}) => {

    return (
        <>

            {/*<Row  className='HeroDivider_no-img-wrap' >*/}
            <Row className={!showImg ? ('HeroDivider_no-img-wrap') : ('HeroDivider_wrap')}>


                {showImg && (
                    <Col xs={12}
                         className={`
                         HeroDivider_img-title-wrap
                         d-flex
                         justify-content-sm-start
                         justify-content-md-end
                         align-items-center
                         m-0
                         p-0
                        ${img}`}
                    >
                        <p
                            className={'HeroDivider_title pr-5 mr-5'}
                        >{title}</p>
                    </Col>
                )}
                {showDivider && (

                    <Col xs={12}
                         className='
                     HeroDivider_graphic
                     bg-transparent
                     m-0
                     p-0

                     '>
                    </Col>
                )}
            </Row>


        </>
    )
};

export default HeroDivider