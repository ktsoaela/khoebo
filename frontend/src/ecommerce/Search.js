import React from 'react';
import { useLocation } from 'react-router-dom';


const SearchPage = () => {
    const searchParams = new URLSearchParams(useLocation().search);
    const query = searchParams.get('q');

    return(
        <div className='page'>
            <h2>Search Results for: {query}</h2>
     
        </div>
    );
};

export default SearchPage;