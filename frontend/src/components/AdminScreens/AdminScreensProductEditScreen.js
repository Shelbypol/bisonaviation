import axios from 'axios'
import React, {useState, useEffect, useLayoutEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Row, Col, Container} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../Message'
import Loader from '../Loader'
import {listProductDetails, updateProduct} from "../../actions/productActions";
import {PRODUCT_UPDATE_RESET} from "../../constants/productConstants";

const AdminScreensProductEditScreen = ({match, history}) => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    const productId = match.params.id;

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [partNumber, setPartNumber] = useState('');
    const [includedParts, setIncludedParts] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState(0);
    const [description, setDescription] = useState('');
    const [isPromo, setIsPromo] = useState(false);
    const [isPromoType, setIsPromoType] = useState('');
    const [isAvailable, setIsAvailable] = useState(false);

    const [uploading, setUploading] = useState(false);

    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.productDetails);
    const {loading, error, product} = productDetails;

    const productUpdate = useSelector(state => state.productUpdate);
    const {loading: loadingUpdate, error: errorUpdate, success: successUpdate} = productUpdate;


    useEffect(() => {

        if (successUpdate) {
            dispatch({type: PRODUCT_UPDATE_RESET});
            history.push('/admin/productlist');
        } else {
            if (!product.name || product._id !== productId) {
                dispatch(listProductDetails(productId))
            } else {
                setName(product.name);
                setPrice(product.price);
                setImage(product.image);
                setBrand(product.brand);
                setIsPromoType(product.isPromoType);
                setIsPromo(product.isPromo);
                setIsAvailable(product.isAvailable);
                setPartNumber(product.partNumber);
                setIncludedParts(product.includedParts);
                setCategory(product.category);
                setCountInStock(product.countInStock);
                setDescription(product.description);
            }
        }
    }, [product, dispatch, productId, history, successUpdate]);

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        setUploading(true);

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            };

            const {data} = await axios.post('/api/upload', formData, config);

            setImage(data);
            setUploading(false)
        } catch (error) {
            console.error(error);
            setUploading(false)
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            updateProduct({
                _id: productId,
                name,
                price,
                image,
                brand,
                includedParts,
                isAvailable,
                isPromoType,
                isPromo,
                partNumber,
                category,
                description,
                countInStock
            }))
    };

    return (
        <>
        <Container className='bg-transparent text-white min-vh-100 min-vw-100 py-5'>
            {/*<Row className='my-0 px-3 py-5'>*/}
            {/*    <Col xs={10} className='d-flex justify-content-start'>*/}
            {/*        <h4 className='text-white'>Edit ProductCard</h4>*/}
            {/*    </Col>*/}
            {/*    <Col xs={2} className='d-flex justify-content-end'>*/}
            {/*        <Link to='/admin/productlist' className='btn global_goldenrodtxtborder-btn rounded py-1 px-2'>*/}
            {/*            back*/}
            {/*        </Link>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
            {loadingUpdate && <Loader/>}
            {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
            {loading && <Loader/>}
            {loading && <Message variant='danger'>{error}</Message>}
            {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (

                <Form onSubmit={submitHandler} className='p-3'>
                    <Row className='d-flex justify-content-center '>

                        <Col lg={6} xs={12} className='global_white'>

                            <Row className='pb-5 '>

                                <Col md={6} xs={12}>
                                     <h4 className='text-white'>Edit Product</h4>
                                </Col>
                                <Col md={6} xs={12} className='d-flex justify-content-lg-end justify-content-sm-start'>
                                    <Link to='/admin/productlist'
                                          className='btn global_goldenrodtxtborder-btn rounded py-1 px-2'>
                                        back
                                    </Link>
                                </Col>
                            </Row>

                            {/* PROMO*/}
                            <Form.Group controlId='isAvailable'>
                                <Form.Check type='checkbox'
                                            label='Is Available'
                                            checked={isAvailable}
                                            onChange={(e) => setIsAvailable(e.target.checked)}>
                                </Form.Check>

                            </Form.Group>
                            {/* PROMO*/}
                            <Form.Group controlId='isPromo'>
                                <Form.Check type='checkbox'
                                            label='Show Promo'
                                            checked={isPromo}
                                            onChange={(e) => setIsPromo(e.target.checked)}>
                                </Form.Check>
                            </Form.Group>

                            <Form.Group controlId='isPromoType'>
                                <Form.Label className='mb-0 pt-2 px-1 w-100 global_goldenrod'><h6 className='global_goldenrod'>Promo Type</h6></Form.Label>
                                <Form.Control type='text'
                                              placeholder='discount %, new price, on sale etc.'
                                              className='global_light-transparent global_white'
                                              value={isPromoType}
                                              onChange={(e) => setIsPromoType(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            {/* IMAGE */}
                            <Form.Group controlId='image'>
                                <Form.Label className='mb-0 pt-2 px-1 w-100'><h6 className='global_goldenrod'>Image</h6></Form.Label>
                                <Form.Control type='text'
                                              placeholder='Enter image url'
                                              className='global_light-transparent global_white'
                                              value={image}
                                              onChange={(e) => setImage(e.target.value)}>
                                </Form.Control>
                                <Form.File id='image-file'
                                           label='Choose File'
                                           custom
                                           onChange={uploadFileHandler}
                                           className='global_goldenrod'
                                />

                                {uploading && <Loader/>}
                            </Form.Group>

                        {/*</Col>*/}
                        {/*<Col lg={5} xs={12} className=''>*/}
                            {/* NAME */}
                            <Form.Group controlId='name'>
                                <Form.Label className='mb-0 pt-2 px-1 w-100'><h6 className='global_goldenrod'>Name</h6></Form.Label>
                                <Form.Control type='name'
                                              placeholder='Enter name'
                                              className='global_light-transparent global_white'
                                              value={name}
                                              onChange={(e) => setName(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            {/* PART NUMBER */}
                            <Form.Group controlId='partNumber'>
                                <Form.Label className='mb-0 pt-2 px-1 w-100'><h6 className='global_goldenrod'>Part Number</h6></Form.Label>
                                <Form.Control type='partNumber'
                                              placeholder='Part number'
                                              className='global_light-transparent global_white'
                                              value={partNumber}
                                              onChange={(e) => setPartNumber(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            {/* PRICE */}
                            <Form.Group controlId='price'>
                                <Form.Label className='mb-0 pt-2 px-1 w-100'><h6 className='global_goldenrod'>Price</h6></Form.Label>
                                <Form.Control type='number'
                                              placeholder='Enter price'
                                              className='global_light-transparent global_white'
                                              value={price}
                                              onChange={(e) => setPrice(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            {/* BRAND */}
                            <Form.Group controlId='manufacturer'>
                                <Form.Label className='mb-0 pt-2 px-1 w-100'><h6 className='global_goldenrod'>Brand</h6></Form.Label>
                                <Form.Control type='text'
                                              placeholder='Enter manufacturer'
                                              className='global_light-transparent global_white'
                                              value={brand}
                                              onChange={(e) => setBrand(e.target.value)}>
                                </Form.Control>
                            </Form.Group>


                        {/*</Col>*/}
                        {/*<Col lg={4} xs={12}>*/}
                            {/* COUNT IN STOCK*/}
                            <Form.Group controlId='countInStock'>
                                <Form.Label className='mb-0 pt-2 px-1 w-100'><h6 className='global_goldenrod'>Count in Stock</h6></Form.Label>
                                <Form.Control type='number'
                                              placeholder='Enter count in stock'
                                              className='global_light-transparent global_white'
                                              value={countInStock}
                                              onChange={(e) => setCountInStock(e.target.value)}>
                                </Form.Control>
                            </Form.Group>
                            {/* CATEGORIES */}
                            <Form.Group controlId='category'>
                                <Form.Label className='mb-0 pt-2 px-1 w-100'><h6 className='global_goldenrod'>Category</h6></Form.Label>
                                <Form.Control type='text'
                                              placeholder='Enter category'
                                              className='global_light-transparent global_white'
                                              value={category}
                                              onChange={(e) => setCategory(e.target.value)}>
                                </Form.Control>
                            </Form.Group>
                            {/* DESCRIPTION */}
                            <Form.Group controlId='description'>
                                <Form.Label className='mb-0 pt-2 px-1 w-100'><h6 className='global_goldenrod'>overview description</h6></Form.Label>
                                <Form.Control type='text'
                                              placeholder='Enter description'
                                              className='global_light-transparent global_white'
                                              value={description}
                                              onChange={(e) => setDescription(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            {/* PARTS INCLUDED */}
                            <Form.Group controlId='includedParts'>
                                <Form.Label className='mb-0 pt-2 px-1 w-100'><h6 className='global_goldenrod'>Parts Included</h6></Form.Label>
                                <Form.Control type='text'
                                              placeholder='Parts included'
                                              className='global_light-transparent global_white'
                                              value={includedParts}
                                              onChange={(e) => setIncludedParts(e.target.value)}>
                                </Form.Control>
                            </Form.Group>
                        </Col>


                    </Row>
                    <Row className='p-0 mb-5 d-flex justify-content-center'>
                        <Col md={4} xs={12} className=' m-0 d-flex justify-content-center'>
                            <Button type='submit' variant='primary' className='w-100 global_goldenrodtxtborder-btn rounded '>
                                Update
                            </Button>
                        </Col>
                    </Row>
                </Form>
            )}
        </Container>


        </>

    )
};

export default AdminScreensProductEditScreen