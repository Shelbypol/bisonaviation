import React from 'react'
import {Table} from 'react-bootstrap';

const FlirTable = () => {


    return (

        <Table striped bordered hover variant="dark">
            <thead>
            <tr>
                <th>Manufacturer</th>
                <th>Nomenclature</th>
                <th>Model Number / APN</th>
                <th>Part Number</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    FLIR Systems, Inc.
                </td>
                <td>
                    Model 2000A - Complete System
                </td>
                <td>
                    FLIR 2000A
                </td>
                <td>

                </td>
            </tr>
            <tr>
                <td>

                </td>
                <td>

                </td>
                <td>

                </td>
                <td>

                </td>
            </tr>
            <tr>
                <td>

                </td>
                <td>

                </td>
                <td>

                </td>
                <td>

                </td>
            </tr>
            </tbody>
        </Table>

    )
};
export default FlirTable;