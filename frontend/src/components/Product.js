import React from 'react';
//import Link for Router
import { Link  } from 'react-router-dom'
import {Button, Card, ListGroup} from 'react-bootstrap'
import Rating from './Rating'
// import {useSelector} from "react-redux";

// access props (product._id and product.image) through the ({ product )} in the function param
const Product = ({ product, history, productId }) => {

    //HANDLERS
    const addToCartHandler = () => {
        console.log(product._id);
        history.push(`/cart/${productId}?qty=1`);
    };

    // <div className="fluid react-slick">
    //     <div className="fluid__image-container">
    //         <ReactSlick {...{
    //             rimProps: {
    //                 enlargedImagePortalId: 'portal',
    //                 enlargedImageContainerDimensions: {
    //                     width: '200%',
    //                     height: '100%'
    //                 }
    //             }
    //         }}/>
    //     </div>

    // <div className="fluid__instructions" style={{position: 'relative'}}>
    //     <div
    //         id="portal"
    //         className="portal"
    //     />

    // <ReactImageMagnify
    //     {...{
    //         smallImage: {
    //             alt: {product.name},
    //             isFluidWidth: true,
    //             src: src.small,
    //             srcSet: {product.image},
    //             sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
    //         },
    //         largeImage: {
    //             src: src.large,
    //             width: 1426,
    //             height: 2000
    //         },
    //         lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }
    //     }}
    //     {...rimProps}
    // />

    return (
        <Card className='my-3 mx-0 rounded border-0'>
            {/* Replace 'a' tags with Link from router and href is replaced with 'to'*/}
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' className='h-75 w-75' />
            </Link>
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>
                            {product.name}
                        </strong>
                    </Card.Title>
                </Link>
                <Card.Text as='div'>
                    {/* taking in two props value and text (talking with Rating component) */}
                    <Rating value={product.rating} text={`${product.numReviews} reviews`}>
                        {product.rating} from {product.numReviews} reviews}
                    </Rating>
                </Card.Text>
                <Card.Text as='h3'>
                    ${product.price}

                </Card.Text>
                <Card.Text>
                    <Button
                        onClick={addToCartHandler}
                        className='btn btn-block'
                        type='button'
                        // disabled={product.countInStock === 0 }
                    >
                        ADD TO CART
                    </Button>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product