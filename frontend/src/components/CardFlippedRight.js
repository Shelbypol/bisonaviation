import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const CardFlippedLeft = ({ imgSrc, imgAlt ,title, subTitle, text, btnTitle }) => {
    return (
        <div className='m-0 p-0'>
            <Card style={{zIndex: '1'}} className='d-inline-block w-100 m-0 p-0 border-0'>
                <CardBody className='float-left textCard '>
                    <CardTitle tag="h1" className='font-weight-bold'>{title}</CardTitle>
                    <CardSubtitle tag="h6" className="text-muted">{subTitle}</CardSubtitle>
                    <CardText className=''>{text}</CardText>
                    <Button className=''>{btnTitle}</Button>
                </CardBody>
                <CardImg height='100%' width='25%' className='rounded img-fluid float-right imgCard' src={imgSrc} alt={imgAlt} />
            </Card>
        </div>
    );
};

export default CardFlippedLeft;