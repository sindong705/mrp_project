import React from 'react';

function Logo(props) {
    return (
        <h1 className='header_logo'>
            <a href="/">
                <em aria-hidden='true'></em>
                <span>MRP<br/>Project</span>
            </a>
        </h1>
    );
}

export default Logo 