import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const CardFlipped = ({ imgSrc, imgAlt, title, titleClassName, subTitle, text, textClassName, btnTitle, btnClassName }) => {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src={imgSrc} alt={imgAlt} />
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