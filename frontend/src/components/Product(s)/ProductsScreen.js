import React from 'react'
import { Row } from 'react-bootstrap'
import Meta from "../Meta";
import ProductsPage from "./ProductsPage";
import {Jumbotron} from "reactstrap";

const ProductsScreen = ({match, history}) => {

    return (
        <>

                <Jumbotron className='CatMan_screen-bg mb-0 px-0 pt-0 pb-0' style={{zIndex: '2'}} fluid>

                    <>
                        <Meta title='Bison | Products'/>

                        <Row xs={12} className='CatMan-nav-menu'>
                            <ProductsPage match={match} history={history}/>
                        </Row>
                    </>

                </Jumbotron>

        </>
    )
};

export default ProductsScreen;