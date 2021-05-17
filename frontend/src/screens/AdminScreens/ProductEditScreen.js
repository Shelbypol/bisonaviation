import axios from 'axios'
import React, {useState, useEffect, useLayoutEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Row, Col, Container} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import {listProductDetails, updateProduct} from "../../actions/productActions";
import {PRODUCT_UPDATE_RESET} from "../../constants/productConstants";
import HeaderDesktop from "../../components/HeaderFooter/HeaderDesktop";
import './Admin.css'


const ProductEditScreen = ({match, history}) => {

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
        <HeaderDesktop/>
        <Container className=' bg-white  min-vh-100 min-vw-100'>
            <Row xs={12} className='my-0 px-3 py-5 border-bottom'>
                <Col xs={10} className='d-flex justify-content-start'>
                    <h4>Edit Product</h4>
                </Col>
                <Col xs={2} className='d-flex justify-content-end'>
                    <Link to='/admin/productlist' className='btn btn-light py-0 px-1'>
                        Go Back
                    </Link>
                </Col>
            </Row>
            {/*<FormContainer>*/}
            {loadingUpdate && <Loader/>}
            {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
            {loading && <Loader/>}
            {loading && <Message variant='danger'>{error}</Message>}
            {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (

                <Form onSubmit={submitHandler} className='p-3'>
                    <Row className='p-0 mb-2'>
                        <Col className='pr-3 m-0 d-flex justify-content-end'>
                            <Button type='submit' variant='primary' className='px-3 py-1 global_RedFontWhiteBg'>Update</Button>
                        </Col>
                    </Row>
                    <Row className='mt-1'>
                        <Col xs={3} className='border-right'>
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
                                <Form.Label className='px-2 w-100 Admin_form-titles'>Promo Type</Form.Label>
                                <Form.Control type='text'
                                              placeholder='discount %, new price, on sale etc.'
                                              value={isPromoType}
                                              onChange={(e) => setIsPromoType(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            {/* IMAGE */}
                            <Form.Group controlId='image'>
                                <Form.Label className='px-2 w-100 Admin_form-titles'>Image</Form.Label>
                                <Form.Control type='text'
                                              placeholder='Enter image url'
                                              value={image}
                                              onChange={(e) => setImage(e.target.value)}>
                                </Form.Control>
                                <Form.File id='image-file'
                                           label='Choose File'
                                           custom
                                           onChange={uploadFileHandler}
                                />

                                {uploading && <Loader/>}
                            </Form.Group>

                        </Col>
                        <Col xs={5} className='border-right'>
                            {/* NAME */}
                            <Form.Group controlId='name'>
                                <Form.Label className='px-2 w-100 Admin_form-titles'>Name</Form.Label>
                                <Form.Control type='name'
                                              placeholder='Enter name'
                                              value={name}
                                              onChange={(e) => setName(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            {/* PART NUMBER */}
                            <Form.Group controlId='partNumber'>
                                <Form.Label className='px-2 w-100 Admin_form-titles'>Part Number</Form.Label>
                                <Form.Control type='partNumber'
                                              placeholder='Part number'
                                              value={partNumber}
                                              onChange={(e) => setPartNumber(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            {/* PRICE */}
                            <Form.Group controlId='price'>
                                <Form.Label className='px-2 w-100 Admin_form-titles'>Price</Form.Label>
                                <Form.Control type='number'
                                              placeholder='Enter price'
                                              value={price}
                                              onChange={(e) => setPrice(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            {/* BRAND */}
                            <Form.Group controlId='manufacturer'>
                                <Form.Label className='px-2 w-100 Admin_form-titles'>Brand</Form.Label>
                                <Form.Control type='text'
                                              placeholder='Enter manufacturer'
                                              value={brand}
                                              onChange={(e) => setBrand(e.target.value)}>
                                </Form.Control>
                            </Form.Group>


                        </Col>
                        <Col xs={4}>
                            {/* COUNT IN STOCK*/}
                            <Form.Group controlId='countInStock'>
                                <Form.Label className='px-2 w-100 Admin_form-titles'>Count In Stock</Form.Label>
                                <Form.Control type='number'
                                              placeholder='Enter count in stock'
                                              value={countInStock}
                                              onChange={(e) => setCountInStock(e.target.value)}>
                                </Form.Control>
                            </Form.Group>
                            {/* CATEGORIES */}
                            <Form.Group controlId='category'>
                                <Form.Label className='px-2 w-100 Admin_form-titles'>Category</Form.Label>
                                <Form.Control type='text'
                                              placeholder='Enter category'
                                              value={category}
                                              onChange={(e) => setCategory(e.target.value)}>
                                </Form.Control>
                            </Form.Group>
                            {/* DESCRIPTION */}
                            <Form.Group controlId='description'>
                                <Form.Label className='px-2 w-100 Admin_form-titles'>Overview / Description</Form.Label>
                                <Form.Control type='text'
                                              placeholder='Enter description'
                                              value={description}
                                              onChange={(e) => setDescription(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            {/* PARTS INCLUDED */}
                            <Form.Group controlId='includedParts'>
                                <Form.Label className='px-2 w-100 Admin_form-titles'>Parts included</Form.Label>
                                <Form.Control type='text'
                                              placeholder='Parts included'
                                              value={includedParts}
                                              onChange={(e) => setIncludedParts(e.target.value)}>
                                </Form.Control>
                            </Form.Group>
                        </Col>


                    </Row>
                </Form>
            )}
            {/*</FormContainer>*/}
        </Container>
        </>

    )
};

export default ProductEditScreen