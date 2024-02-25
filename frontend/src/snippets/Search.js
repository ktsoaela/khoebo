// Search.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [query, setQuery] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const exampleContent = [
        'product',
        'solution',
        'partner',
        'news',
        'support',
        'training'
    ];

    const handleSearch = () => {
        // Check if query matches any content
        const contentExists = exampleContent.includes(query.toLowerCase());
        if (contentExists) {
            // Logic to display search results or perform search action
            console.log(`Content found for query: ${query}`);
        } else {
            // If content doesn't exist, open the modal
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const redirectToSearchPage = () => {
        navigate(`/search?q=${query}`);
    };

    return (
        <div>
            <li className='navitem'onClick={handleSearch}> Search</li>
            {isModalOpen && (
                <dialog className='dialog' open>
                    <div className='dialog-header'>
                        <button className='' onClick={closeModal}>X</button>
                    </div>
                    <div className='dialog-body'>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Enter your query..."
                    />
                    <button onClick={redirectToSearchPage}>Search</button>
                    
                    </div>
                    <div className='dialog-header'></div>
                </dialog>
            )}
        </div>
    );
};

export default Search;
