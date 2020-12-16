import React from 'react';
import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';

const CardOverlay = ({imgSrc, cardTitle}) => {
    return (
            <Card className='border-0' inverse>
                <CardImg className='w-100' src={imgSrc} alt="Card image cap" />
                <CardImgOverlay>
                    <CardTitle className='margin-auto' tag="h5">{cardTitle}</CardTitle>
                </CardImgOverlay>
            </Card>
    );
};

export default CardOverlay;