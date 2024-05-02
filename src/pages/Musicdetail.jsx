import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Main from '../components/layout/Main';

function Musicdetail() {
    const { trackId } = useParams();
    const [trackDetail, setTrackDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTrackDetail = async () => {
            try {
                const response = await axios.get(`https://api.spotify.com/v1/tracks/${trackId}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setTrackDetail(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching track detail:', error);
            }
        };

        fetchTrackDetail();
    }, [trackId]);

    return (
        <Main 
            title = "음악 상세보기"
            description="음악 상세페이지입니다.">
            {loading ? (
                <h2>Loading...</h2>
            ) : (
                <div className='video_view'>
                    <div className='video_play' style={{ paddingBottom: '0', textAlign: 'center' }}>
                        <img src={trackDetail.album.images[0].url} alt="Album Cover"/>
                        <audio controls style={{width: '100%', marginTop: '20px'}}>
                            <source src={trackDetail.preview_url} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                    <div className='video_info' style={{ padding: '20px' }}>
                        <h2 className='video_title' style={{ padding: '10px' }}>{trackDetail.name}</h2>
                        <div className='video_channel'>
                            <div className='count'>
                                <span>Artist: {trackDetail.artists.map(artist => artist.name).join(', ')}</span>
                                <span>Album: {trackDetail.album.name}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Main>
    );
}

export default Musicdetail;