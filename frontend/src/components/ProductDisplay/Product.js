import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeFromCart} from "../../actions/cartActions";


const Product = ({product, history, match}) => {

    const [activeHeart, setActiveHeart] = useState(false);

    const dispatch = useDispatch();


    const wishListMy = useSelector(state => state.wishListMy);
    const {loading: loadingOrders, error: errorOrders, wishList} = wishListMy;


    useEffect(() => {
    }, [dispatch, activeHeart, match, wishList]);

    // const alreadySaved = (id) => {
    //     let savedArr = [];
    //     wishList.map(wishes => (
    //         wishes.wishListItems.map(item => (
    //             console.log(item.id)
    //             // savedArr.push(item.id)
    //         ))));
    //     // return(savedArr.includes(id))
    // };

    const like = () => {
        setActiveHeart(!activeHeart);
        dispatch(addToCart(product._id, 1));
        // history.push(`/cart/${id}?qty=1`);
    };

    const unlike = () => {
        setActiveHeart(!activeHeart);
        dispatch(removeFromCart(product._id))
        // history.push(`/cart/${id}?qty=1`);
    };

    const MAX_LENGTH = 100;
    // const MAX_LENGTH = 250;

    return (
        <>
            <Row xs={12} className='mt-5'>
            <Col xs={4}  className='border'>


                <Col xs={12} className='py-3 d-flex align-items-start justify-content-center'>

                    {product.isPromo && (
                        <p className='flag red global_accentFont mt-n1 mb-0 mx-0'>{product.isPromoType}</p>
                    )}
                    {/* IMAGE */}
                    <Link to={`/product/${product._id}`}>
                        {/*PROMO*/}
                        <img src={product.image} alt={product.name}
                             className='img-fluid w-50 h-50'/>
                    </Link>

                </Col>

                <Col xs={12} className='my-auto'>
                    <h5 className=' mb-2'>
                        <Link to={`/product/${product._id}`}>
                            {product.name}
                        </Link>
                    </h5>

                    {/*AVAILABLE*/}
                    {!product.isAvailable && (
                        <i>not available </i>
                    )}

                    <div className='mt-2'>
                        {product.description.length > MAX_LENGTH ?
                            (
                                <div>
                                    {`${product.description.substring(0, MAX_LENGTH)}...`}<Link
                                    to={`/product/${product._id}`} className='global_bisonRedTxt'>Read
                                    more</Link>
                                </div>
                            ) :
                            <p>{product.description}</p>
                        }
                    </div>

                    <Row>
                        <Col xs={6}>
                            {/* LIKE BTN */}
                            <div className='mt-2 d-flex justify-content-start'>
                                {activeHeart ? (
                                    <>
                                            <span onClick={unlike}
                                                  className='global_cursor'
                                                  style={{color: 'rgba(200, 0, 0, 1)', fontSize: '1.3em'}}>
                                                <i className="mt-auto fas fa-heart "> </i>
                                            </span>
                                    </>
                                ) : (
                                    <>
                                            <span className='global_cursor' onClick={like} style={{fontSize: '1.3em'}}>
                                                <i className="mt-auto fas fa-heart"> </i>
                                            </span>
                                    </>
                                )}
                            </div>
                        </Col>
                        <Col xs={6}>
                            {/* PRICE */}
                            <h5 className='mt-3 d-flex justify-content-start'>
                                <p>${product.price}</p>
                            </h5>
                        </Col>
                    </Row>
                </Col>

            </Col>
            </Row>
        </>
    )
};

export default Product

//
//
// <Row xs={12} className='mt-5 border-bottom'>
//
//
//     <Col xs={4} className='py-3 d-flex align-items-start justify-content-center'>
//
//     {product.isPromo && (
//             <p className='flag red global_accentFont mt-n1 mb-0 mx-0'>{product.isPromoType}</p>
//         )}
// {/* IMAGE */}
// <Link to={`/product/${product._id}`}>
//     {/*PROMO*/}
//     <img src={product.image} alt={product.name}
//          className='img-fluid'/>
// </Link>
//
// </Col>
//
// <Col xs={8} className='my-auto'>
//     <h5 className=' mb-2'>
//         <Link to={`/product/${product._id}`}>
//             {product.name}
//         </Link>
//     </h5>
//
//     {/*AVAILABLE*/}
//     {!product.isAvailable && (
//         <i>not available </i>
//     )}
//
//     <div className='mt-2'>
//         {product.description.length > MAX_LENGTH ?
//             (
//                 <div>
//                     {`${product.description.substring(0, MAX_LENGTH)}...`}<Link
//                     to={`/product/${product._id}`} className='global_bisonRedTxt'>Read more</Link>
//                 </div>
//             ) :
//             <p>{product.description}</p>
//         }
//     </div>
//
//     <Row>
//         <Col xs={1}>
//             {/* LIKE BTN */}
//             <div className='mt-2 d-flex justify-content-start'>
//                 {activeHeart ? (
//                     <>
//                                             <span onClick={unlike}
//                                                   className='global_cursor' style={{color: 'rgba(200, 0, 0, 1)', fontSize: '1.3em'}}>
//                                                 <i className="mt-auto fas fa-heart "> </i>
//                                             </span>
//                     </>
//                 ) : (
//                     <>
//                                             <span className='global_cursor' onClick={like} style={{fontSize: '1.3em'}}>
//                                                 <i className="mt-auto fas fa-heart"> </i>
//                                             </span>
//                     </>
//                 )}
//             </div>
//         </Col>
//         <Col xs={11}>
//             {/* PRICE */}
//             <h5 className='mt-3 d-flex justify-content-start'>
//                 <p>${product.price}</p>
//             </h5>
//         </Col>
//     </Row>
// </Col>
// </Row>