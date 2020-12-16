import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const CardFlippedLeft = ({ imgSrc, imgAlt ,title, subTitle, text, btnTitle }) => {
    return (
        <div className=''>
            <Card style={{zIndex: '1'}} className='d-inline-block w-100 cardStyle border-0'>
                <CardBody className='float-left textCard '>
                    <CardTitle tag="h4" className='font-weight-bold mb-4' style={{borderBottom: '5px solid darkred'}}>{title}</CardTitle>
                    <CardSubtitle tag="h6" className="text-muted mb-3">{subTitle}</CardSubtitle>
                    <CardText className=''>{text}</CardText>
                    <Button className=''>{btnTitle}</Button>
                </CardBody>
                <CardImg height='100%' width='25%' className='img-fluid float-right imgCard' src={imgSrc} alt={imgAlt} />
            </Card>
        </div>
    );
};

export default CardFlippedLeft;