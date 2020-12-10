import React, {useState} from 'react';
import {Button, Alert, Col} from 'react-bootstrap';

const AlertDismissible = (props) => {
    const [show, setShow] = useState(false)


    return (
        <>
                <p>
                    <h5 className='mt-2'>{props.title}</h5>
                    <Button onClick={() => setShow(true)} variant='danger' >{props.icon}</Button>

                </p>


            {show &&

                <Alert onClose={() => setShow(false)} dismissible >
                    <p>
                        {props.note}
                    </p>
                </Alert>


            }
        </>
    );
}

export default AlertDismissible;
