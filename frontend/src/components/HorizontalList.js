import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';

const HorizontalList = ({icon1, icon2, icon3, titleOne, titleTwo, titleThree, link1, link2, link3, breakpoint}) => {



    return (
        <div>
            <ListGroup horizontal={breakpoint}>
                <ListGroupItem className='border-0' tag="a" href={link1}>{icon1}{titleOne}</ListGroupItem>
                <ListGroupItem className='border-0' tag="a" href={link2}>{icon2}{titleTwo}</ListGroupItem>
                <ListGroupItem className='border-0' tag="a" href={link3}>{icon3}{titleThree}</ListGroupItem>
            </ListGroup>
        </div>
    )
};

    export default HorizontalList
