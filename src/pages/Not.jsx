import React from 'react';
import Main from '../components/layout/Main';

function Not(props) {
    return (
        <Main 
            title = "잘못된 페이지"
            description="접근이 잘못된 페이지입니다.">
            <h2>😱 접근이 잘못된 페이지입니다.</h2>
        </Main>
    );
}

export default Not;