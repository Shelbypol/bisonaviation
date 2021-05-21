import React from 'react'
import './HeroJumbotron.css';
import {Row, Col} from "react-bootstrap";

const HeroJumbotron = ({img, showImg, title, leftTitle}) => {

    return (
        <>
            <Row className={!showImg ? ('HeroJumbotron_no-img-wrap') : ('HeroJumbotron_wrap')}>


                {showImg && (
                    <Col xs={12}
                         className={`
                         HeroJumbotron_img-title-wrap
                         d-flex
                         justify-content-center
                         align-items-center
                         m-0
                         p-0
                        ${img}`}
                    >
                        {leftTitle ? (
                            <p
                                className={'HeroJumbotron_title global_goldenrodtxtborder-btn'}
                            >{title}</p>
                        ):(
                        <p
                            className={'HeroJumbotron_title  global_goldenrodtxtborder-btn'}
                        >{title}</p>

                        )}
                    </Col>
                )}

            </Row>


        </>
    )
};

export default HeroJumbotron