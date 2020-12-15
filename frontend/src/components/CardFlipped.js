import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const CardFlipped = ({ imgSrc, imgAlt ,title, subTitle, text, btnTitle }) => {
    return (
        <div>
            <Card className='d-inline-block w-100 border-0'>
                <CardImg height='100%' width='25%' className='img-fluid float-left imgCard' src={imgSrc} alt={imgAlt} />
                <CardBody className='float-left'>
                    <CardTitle tag="h5">{title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{subTitle}</CardSubtitle>
                    <CardText className=''>{text}</CardText>
                    <Button className=''>{btnTitle}</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default CardFlipped;