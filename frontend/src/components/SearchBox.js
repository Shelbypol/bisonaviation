import React, {  useState } from 'react'
import { Form, Button } from 'react-bootstrap'
const SearchBox = ({ history }) => {
const [keyword, setKeyword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        if(keyword.trim()){
            history.push(`/search/${keyword}`);
        } else {
            history.push('/')
        }
        setKeyword('')
    };

    return (
        <Form onSubmit={submitHandler} inline className='mx-auto'>
            <Form.Control
                type='text'
                name='searchBar'
                value={keyword}
                placeholder='Search for Products...'
                onChange={(e) => setKeyword(e.target.value)}
                className='mr-sm-0 ml-sm-5 my-0 mx-0'
            >
            </Form.Control>
            <Button style={{border: '2.5px solid white'}} type='submit' variant='outline-light' className='mt-1 mb-1 pl-3 p-2 justify-content-center rounded-right'><i style={{color: 'red'}} className="fas fa-search"> </i></Button>
        </Form>
    )
};

export default SearchBox