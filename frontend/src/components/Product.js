import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import {Card, Button} from 'react-bootstrap'

const Product = ({product}) => {


    const [activeHeart, setActiveHeart] = useState(false);


    useEffect(() => {

    }, [activeHeart]);

    const like = () => {
        return setActiveHeart(!activeHeart)
    };
        console.log(activeHeart)



    // const sentenceCapitalization = (mySentence) => {
    //     const words = mySentence.split(" ");
    //     for (let i = 0; i < words.length; i++) {
    //         words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    //     }
    //     return words.join(" ");
    // };

    return (
        <Card className='my-3 mx-0 rounded border-0'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' className='img-fluid d-flex justify-content-center'/>
            </Link>
            <Card.Body>
                <Card.Text as='div'>
                    {/*<Button*/}
                    {/*    onClick={like}*/}
                    {/*    type='button'*/}
                    {/*>*/}
                    {/*     <p className={activeHeart ? 'fas fa-heart ' : 'fal fa-heart'}> </p>*/}
                    {activeHeart ? (
                        <p onClick={like} className='global_cursor global_bisonRedTxt'>saved</p>
                    ) : (
                        <p onClick={like} className='global_cursor global_bisonRedTxt'>&#60;3</p>
                    )
                    }
                    {/*</Button>*/}

                    {/*</Button>*/}
                    {/*<Card.Text as='div'>*/}
                    {/*<Rating value={product.rating} text={`${product.numReviews} reviews`}>*/}
                    {/*    {product.rating} from {product.numReviews} reviews}*/}
                    {/*</Rating>*/}
                    {/*<strong>*/}
                    {/*    /!*{sentenceCapitalization(product.brand)}*!/*/}
                    {/*    {product.brand}*/}
                    {/*</strong>*/}
                </Card.Text>

                <Link to={`/product/${product._id}`}>
                    <Card.Text as='div' className='p-0 m-0'>
                        {/*<strong>*/}
                        {/*    {sentenceCapitalization(product.name)}*/}
                        {product.name}
                        {/*</strong>*/}
                    </Card.Text>
                </Link>

                <Card.Text as='h5' className='d-flex justify-content-center'>
                    ${product.price}
                </Card.Text>
                {/*<Card.Text>*/}
                {/*    */}
                {/*    <Button*/}
                {/*        onClick={addToCartHandler}*/}
                {/*        className='btn btn-block p-1 global_RedFontWhiteBgBtn'*/}
                {/*        type='button'*/}
                {/*        // disabled={product.countInStock === 0 }*/}
                {/*    >*/}
                {/*        <i className='fal fa-heart global_bisonRedFontWhiteBg animations_icon-font-size animations_icon-spin'> </i>*/}
                {/*        /!*ADD TO WISHLIST*!/*/}
                {/*        /!*<i className="fal fa-star global_RedFontWhiteBg"> </i>*!/*/}
                {/*    </Button>*/}
                {/*</Card.Text>*/}
            </Card.Body>
        </Card>
    )
};

export default Product