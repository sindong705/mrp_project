import React, { useState, useEffect } from 'react';
import { BiLogIn } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import { snsLink } from '../../data/header'

function Sns(props) {
    const CLIENT_ID=process.env.REACT_APP_SPOTIFY_CLIENT_ID
    const REDIRECT_URI =process.env.REACT_APP_SPOTIFY_REDIRECT_URI 
    const AUTH_ENDPOINT =process.env.REACT_APP_SPOTIFY_AUTH_ENDPOINT 
    const RESPONSE_TYPE = process.env.REACT_APP_SPOTIFY_RESPONSE_TYPE
    const [token, setToken] = useState('');

    useEffect(() => {
        // URL에서 액세스 토큰 파싱
        const hash = window.location.hash;
        let accessToken = '';

        if (hash) {
        accessToken = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1];
        setToken(accessToken);
        // 액세스 토큰을 localStorage에 저장하거나 다른 곳에 보관할 수 있습니다.
        localStorage.setItem('accessToken', accessToken);
        }
    }, []);

    const handleLogin = () => {
        // Spotify 로그인 창 열기
        window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
    };

    const handleLogout = () => {
        // 액세스 토큰 및 localStorage에서 제거
        setToken('');
        localStorage.removeItem('accessToken');
    };

    return (
        <div className='header_sns'>
            <ul>
                {snsLink.map((sns, key) => (
                    <li key={key}>
                        <a 
                            href={sns.url} 
                            target='_black' 
                            rel='noopener noreferrer' 
                            aria-label={sns.title}
                        >
                            <span>{sns.icon}</span>
                        </a>
                    </li>
                ))}
                <li>
                    {token ? (
                        <>
                            <button onClick={handleLogout}><BiLogOut /></button>
                        </>
                    ) : (
                        <>
                            <button onClick={handleLogin}><BiLogIn /></button>
                        </>
                    )}
                </li>
            </ul>
        </div>
    )
}

export default Sns