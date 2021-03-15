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
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
        </tr>
        </tbody>
    </Table>

    )
};
export default FlirTable;