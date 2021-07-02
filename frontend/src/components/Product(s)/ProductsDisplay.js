import React, {useState, useEffect} from "react";
import {Col, Row, Button} from "react-bootstrap";
import './Sidebar.css'
import Sidebar from "react-sidebar";
import {listProducts} from "../../actions/productActions";
import {useDispatch, useSelector} from "react-redux";


const ProductsDisplay = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const [updateCat, setUpdateCat] = useState('');
    const [updateManufacturer, setUpdateManufacturer] = useState('');

    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);
    const {products, pages, page, loading, error} = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch, updateCat, updateManufacturer, sidebarOpen]);


    const displayAllHandler = () => {
        setUpdateManufacturer('');
        setUpdateCat('');
    };

    // SORT CAT HANDLER
    const sortByCategoryHandler = (a) => {
        setUpdateManufacturer('');
        setUpdateCat(a);
    };


    //  SORT BRAND HANDLER
    const sortByManufacturerHandler = (a) => {
        setUpdateCat('');
        setUpdateManufacturer(a);
    };

    const manufacturerArr = [...new Set(products.map(product => product.brand))].sort();
    const catArr = [...new Set(products.map(product => product.category))].sort();


    return (
        <Sidebar
            sidebar={


                <Row className=''>
                    <Col>
                        {(updateManufacturer !== '' || updateCat !== '') && (
                            <>
                                <Row className='global_accentFont py-2 '>
                                    <h4 className='global_cursor ProductsSideBar_sub-titles global_blood-red'>{updateManufacturer || updateCat}</h4>
                                </Row>

                                {/* ALL PRODUCTS*/}
                                <Row
                                    className='global_accentFont'
                                    onClick={displayAllHandler}>
                                    <h6 className='global_cursor ProductsSideBar_sub-titles'>
                                        All Products
                                    </h6>
                                </Row>

                                {/*   ALL CATEGORIES  */}
                                <Row className='global_accentFont'>
                                    <h6 className='global_cursor ProductsSideBar_sub-titles'>Categories</h6>
                                </Row>

                                <Row className='ProductsSideBar_items-bg'>
                                    {catArr.map((product, index) => (
                                        <Col xs={12}
                                             onClick={(ev) => sortByCategoryHandler(product, ev)}
                                             className='btn btn-block global_cursor ProductsSideBar_items'
                                             type='button'
                                             key={index}
                                        >
                                            {product}
                                        </Col>
                                    ))}
                                </Row>

                                {/*   ALL MANUFACTURES  */}
                                <Row className='global_accentFont mt-4'>
                                    <h6 className='global_cursor ProductsSideBar_sub-titles'>Manufactures</h6>
                                </Row>

                                <Row className='ProductsSideBar_items-bg'>
                                    {manufacturerArr.map((product, index) => (
                                        <Col xs={12}
                                             onClick={(ev) => sortByManufacturerHandler(product, ev)}
                                             className='btn btn-block global_cursor ProductsSideBar_items'
                                             type='button'
                                             key={index}
                                        >
                                            {product}
                                        </Col>
                                    ))}
                                </Row>
                            </>
                        )}

                        {/*==============================================================================*/}

                        {/*    ALL CAT & ALL MAN INITIAL DISPLAY    */}
                        {(updateCat === '' && updateManufacturer === '') && (
                            <>
                                {/* ALL PRODUCTS*/}
                                <Row
                                    className='global_accentFont'
                                    onClick={displayAllHandler}>
                                    <h6 className='global_cursor ProductsSideBar_sub-titles'>All
                                        Products</h6>
                                </Row>

                                <Row
                                    className='global_accentFont'>
                                    <h6 className='global_cursor ProductsSideBar_sub-titles'>Categories</h6>
                                </Row>

                                <Row className='ProductsSideBar_items-bg'>
                                    {catArr.map((product, index) => (
                                        <Col xs={12}
                                             onClick={(ev) => sortByCategoryHandler(product, ev)}
                                             className='btn btn-block global_cursor ProductsSideBar_items'
                                             type='button'
                                             key={index}
                                        >
                                            {product}
                                        </Col>
                                    ))}
                                </Row>

                                <Row
                                    className='global_accentFont mt-3 global_cursor '>
                                    <h6 onClick={displayAllHandler}
                                        className='ProductsSideBar_sub-titles'>Manufacturers</h6>
                                </Row>

                                <Row className='ProductsSideBar_items-bg'>
                                    {manufacturerArr.map((product, index) => (
                                        <Col xs={12}
                                             onClick={(ev) => sortByManufacturerHandler(product, ev)}
                                             className='btn btn-block global_cursor ProductsSideBar_items'
                                             type='button'
                                             key={index}
                                        >
                                            {product}
                                        </Col>
                                    ))}
                                </Row>
                            </>
                        )}
                    </Col>
                </Row>


            }
            open={sidebarOpen}
            // onSetOpen={}
            docked={sidebarOpen}
            styles={{sidebar: {background: "black", top: "12.2vh", width: "40vh"}}}
        >
            <button onClick={() => setSidebarOpen(!sidebarOpen)}>
                Open sidebar
            </button>
        </Sidebar>
    );

};

export default ProductsDisplay;


