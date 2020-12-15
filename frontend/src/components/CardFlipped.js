import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const CardFlipped = ({ imgSrc, imgAlt, imgClassName ,title, titleClassName, subTitle, text, textClassName, btnTitle, btnClassName }) => {
    return (
        <div>
            <Card >
                <CardImg width='25%' className={imgClassName} src={imgSrc} alt={imgAlt} />
                <CardBody>
                    <CardTitle className={titleClassName} tag="h5">{title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{subTitle}</CardSubtitle>
                    <CardText className={textClassName}>{text}</CardText>
                    <Button className={btnClassName}>{btnTitle}</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default CardFlipped;