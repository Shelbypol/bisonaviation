import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const CardFlippedLeft = ({ imgSrc, imgClassName, imgAlt ,title, titleStyle, subTitle, text, btnTitle, btnClassName }) => {
    return (
        <div className=''>
            <Card style={{zIndex: '1'}} className='d-inline-block w-100 border-0 cardStyle'>
                <CardImg height='100%' width='25%' className={imgClassName} src={imgSrc} alt={imgAlt} />
                <CardBody className='float-left textCard'>
                    <CardTitle tag="h4" className='font-weight-bold mb-4' style={{titleStyle}}>{title}</CardTitle>
                    <CardSubtitle tag="h6" className="text-muted mb-3">{subTitle}</CardSubtitle>
                    <hr/>
                    <CardText className=''>{text}</CardText>
                    <Button className={btnClassName}>{btnTitle}</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default CardFlippedLeft;