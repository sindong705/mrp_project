import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Main from '../components/layout/Main';
import { Link } from 'react-router-dom';

function Hiphop(props) {
    const [tracks, setTracks] = useState([]);
    const accessToken = localStorage.getItem('accessToken'); // Spotify 액세스 토큰
    const [loading, setLoading] = useState(true); 
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    const hiphopClass = loading ? 'isLoading' : 'isLoaded';

    useEffect(() => {
        async function fetchPlaylist() {
            try {
                const response = await axios.get('https://api.spotify.com/v1/playlists/37i9dQZF1DWW46Vfs1oltB/tracks', {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    },
                    params: {
                        country: 'KR',
                        limit: 40, // 추천받을 음악의 수
                        sort: 'added_at', // 최신순으로 정렬
                        order: 'desc' // 내림차순 정렬
                    }
                });
                const playlistTracks = response.data.items.map(item => item.track);
                setTracks(playlistTracks);
            } catch (error) {
                console.error('Error fetching playlist:', error);
            }
        }

        fetchPlaylist();
    }, [accessToken]);

    const CLIENT_ID=process.env.REACT_APP_SPOTIFY_CLIENT_ID
    const REDIRECT_URI =process.env.REACT_APP_SPOTIFY_REDIRECT_URI 
    const AUTH_ENDPOINT =process.env.REACT_APP_SPOTIFY_AUTH_ENDPOINT 
    const RESPONSE_TYPE = process.env.REACT_APP_SPOTIFY_RESPONSE_TYPE

    const handleLogin = () => {
        // Spotify 로그인 창 열기
        window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
    };

    return (
        <Main 
            title = "힙합 플레이리스트"
            description="힙합 플레이리스트">
            <section id='hiphopPage' className={hiphopClass}>
                <h2>😮 힙합 플레이리스트</h2>
                {accessToken ? 
                    (
                        <div className='video_inner'>
                            {tracks.map((track, index) => (
                                <div className="video" key={index}>
                                    <div className="video_thumb play_icon">
                                        <Link to={`/detail/${track.id}`}>
                                            <img src={track.album.images[0].url} alt="Album Cover" />
                                            <span>
                                                <strong>{track.name}</strong>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <>
                            <div className="video_more">
                                <button onClick={handleLogin}>음악 리스트 불러오기</button>
                            </div>
                        </>
                    )
                }
            </section>
        </Main>
    );
}

export default Hiphop;