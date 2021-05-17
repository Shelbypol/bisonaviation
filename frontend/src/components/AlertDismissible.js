import React, {useState} from 'react';
import {Button, Alert} from 'react-bootstrap';

const AlertDismissible = (props) => {
    const [show, setShow] = useState(false);


    return (
        <>
                <p className='d-inline'>
                    <Button
                        onMouseOver={() => setShow(true)}
                        onClick={() => setShow(false)}
                        variant='danger'
                        dismissible className='mr-2 global_circleHover'
                        style={{borderRadius: "50%"}}>{props.icon}
                    </Button>
                    <h5 className='mt-2'>{props.title}</h5>
                    <h5>{props.title2}</h5>

                </p>

            {show &&

            <Alert>
                {props.note}
            </Alert>


            }


        </>
    );
};

export default AlertDismissible;
