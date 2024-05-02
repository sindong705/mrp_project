import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import axios from 'axios';

function VideoSlider({ track, title, id }) {
    const [loading, setLoading] = useState(true); 
    const [tracks, setTracks] = useState([]);
    const accessToken = localStorage.getItem('accessToken'); // Spotify 액세스 토큰

    useEffect(() => {
        async function fetchPlaylist() {
            try {
                const response = await axios.get(`https://api.spotify.com/v1/playlists/${track}/tracks`, {
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
    }, [accessToken, track]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    const youtubeClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <section id={id} className={youtubeClass}>
            <h2>{title}</h2>

            <div className='video_slider'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    navigation={true}
                    modules={[Navigation]}
                    className={`mySwiper-${id}`}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1600: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {tracks.map((track, key) => (
                        <SwiperSlide key={key}>
                            <div className="video" key={key}>
                                <div className="video_thumb play_icon">
                                    <Link to={`/detail/${track.id}`}>
                                        <img src={track.album.images[0].url} alt="Album Cover" />
                                        <span>
                                            <strong>{track.name}</strong>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default VideoSlider