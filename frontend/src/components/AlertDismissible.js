import React, {useState} from 'react';
import {Button, Alert, Col} from 'react-bootstrap';

const AlertDismissible = (props) => {
    const [show, setShow] = useState(false)


    return (
        <>



            {show &&

            <Alert>
                {/*<p>*/}
                {props.title.toUpperCase()}
                {props.title2 && ' ' + props.title2.toUpperCase()}
                {': ' + props.note}
                {/*</p>*/}
            </Alert>



            }
                <p className='d-inline'>
                    <Button onMouseOver={() => setShow(true)} onClick={() => setShow(false)} variant='danger' dismissible className='mr-2 circleHover' style={{borderRadius: "50%"}}>{props.icon}</Button>
                    <h5 className='mt-2'>{props.title}</h5>
                    <h5>{props.title2}</h5>

                </p>


        </>
    );
}

export default AlertDismissible;
