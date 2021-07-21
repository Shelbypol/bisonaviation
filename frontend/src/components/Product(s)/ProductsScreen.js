import React from 'react'
import {Row} from 'react-bootstrap'
import Meta from "../Meta";
import ProductsPage from "./ProductsPage";
const ProductsScreen = ({match, history}) => {

    // const sidebarMenu = {
    //     display: 'flex',
    //     alignItems: 'flex-start'
    // };

    return (
        <>
            <>
                <Meta title='Bison | Products'/>

                <Row className='bg-white'>
                <ProductsPage match={match} history={history}/>
            </Row>
            </>


        </>
    )
};

export default ProductsScreen;