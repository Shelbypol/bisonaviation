import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

const CardOverlay = ({imgSrc, cardTitle, cardText, cardSmallText, imgClassName}) => {
    return (
        <div>
            <Card inverse>
                <CardImg className={imgClassName} height="50%" width="50%" src={imgSrc} alt="Card image cap" />
                <CardImgOverlay>
                    <CardTitle tag="h5">{cardTitle}</CardTitle>
                    <CardText>{cardText}</CardText>
                    <CardText>
                        <small className="text-muted">{cardSmallText}</small>
                    </CardText>
                </CardImgOverlay>
            </Card>
        </div>
    );
};

export default CardOverlay;