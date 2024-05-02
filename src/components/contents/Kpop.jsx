import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Kpop({ title, id }) {
    const [tracks, setTracks] = useState([]);
    const accessToken = localStorage.getItem('accessToken'); // Spotify 액세스 토큰

    useEffect(() => {
        async function fetchPlaylist() {
            try {
                const response = await axios.get('https://api.spotify.com/v1/playlists/37i9dQZF1DXe5W6diBL5N4/tracks', {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    },
                    params: {
                        country: 'KR',
                        limit: 50, // 추천받을 음악의 수
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

    return (
        <section id={id}>
            <h2>{title}</h2>
            <div className='video_inner'>
                {tracks.map((track, index) => (
                    <div className="video" key={index}>
                        <div className="video_thumb play_icon">
                            <Link to={`/`}>
                                <img src={track.album.images[0].url} alt="Album Cover" />
                                <span>
                                    <strong>{track.name}</strong>
                                </span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Kpop;