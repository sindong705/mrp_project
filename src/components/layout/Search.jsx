import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Search(props) {
    const [searchKeyword, setSearchKeyword] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        console.log(searchKeyword)
        if (searchKeyword) {
            navigate(`/search/${searchKeyword}`);
            setSearchKeyword('');
        }
    };

    return (
        <div id='search'>
            <div className='search_inner'>
                <label htmlFor='searchInput'>
                    <span className='ir'>검색</span>
                </label>
                <input 
                    type='search' 
                    id='searchInput' 
                    placeholder='유튜브에 검색할 검색어를 입력해주세요' 
                    autoComplete='off' 
                    className='search__input' 
                    onChange={e => setSearchKeyword(e.target.value)}
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            handleSearch();
                        }
                    }}
                />
            </div>
        </div>
    );
}

export default Search;