import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const CardFlippedLeft = ({ imgSrc, imgAlt ,title, subTitle, text, btnTitle }) => {
    return (
        <div className=''>
            <Card style={{zIndex: '1'}} className='d-inline-block w-100 p-0 border-0 cardStyle'>
                <CardImg height='100%' width='25%' className='rounded img-fluid float-left imgCard' src={imgSrc} alt={imgAlt} />
                <CardBody className='float-left textCard'>
                    <CardTitle tag="h1" className='font-weight-bold mb-4' style={{borderBottom: '5px solid darkred'}}>{title}</CardTitle>
                    <CardSubtitle tag="h6" className="text-muted">{subTitle}</CardSubtitle>
                    <CardText className=''>{text}</CardText>
                    <Button className=''>{btnTitle}</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default CardFlippedLeft;