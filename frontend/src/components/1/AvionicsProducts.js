import React, {useState} from 'react';
import {Jumbotron} from 'reactstrap';
import '../../style/1/AvionicsProducts.css'
import Zoom from 'react-reveal/Zoom';

const AvionicsProducts = () => {




        return (
            <Jumbotron className='global_silver-chalice-bg m-0 p-0 AvionicsProducts_jumbo' fluid>

                <Zoom>
                    <div>First Child</div>
                    <div>Second Child</div>
                </Zoom>




            </Jumbotron>
        );
    }
    ;

    export default AvionicsProducts;