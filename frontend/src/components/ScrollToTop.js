import React, {useEffect, useState} from "react";
import {Button, Row, Col, Container} from "react-bootstrap";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scorlled upto given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <>
            <Container>

            <Row xs={12} className='my-5'>
                <Col xs={12} className='d-flex justify-content-end'>
                    <div className="scroll-to-top">
                        {isVisible &&
                        <Button onClick={scrollToTop} className='global_bisonRedBgWhiteHoverBgBtn'>
                            {/*<img src='https://i.postimg.cc/44Ytsk8Z/top-arrow-emoj.png' alt='Go to top'/>*/}
                            <i className="fal fa-arrow-to-top" style={{fontSize: '1.5em'}}> </i>
                        </Button>}
                    </div>
                </Col>
            </Row>
            </Container>
        </>
    );
};

export default ScrollToTop;