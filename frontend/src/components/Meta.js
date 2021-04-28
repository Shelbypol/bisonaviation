import React from 'react'
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keyword' content={keywords} />
        </Helmet>
    )
};

Meta.defaultProps = {
    title: 'Bison Aviation',
    description: 'Bison Aviation is an FAA certificated Part 145 Repair Station',
    keywords: 'electronics, buy electronics, cheap electronics'
};

export default Meta