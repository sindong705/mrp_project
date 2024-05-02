import React, { useEffect, useState } from 'react'
import Main from '../components/layout/Main';

import { developerText } from '../data/developer'
import { Link } from 'react-router-dom'

function Developer(props) {
    const [loading, setLoading] = useState(true); 
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    const developerClass = loading ? 'isLoading' : 'isLoaded';
    return (
        <Main 
            title = "추천 PlayList 채널"
            description="오늘의 추천 PlayList 채널입니다.">
            
            <section id='developerPage' className={developerClass}>
                <h2>🥰 추천 PlayList 채널들을 소개합니다.</h2>
                <div className="developer_inner">
                    {developerText.map((developer, key) => (
                        <div className="developer" key={key}>
                            <div className="developer_img play_icon">
                                <Link to={`/channel/${developer.channelId}`}>
                                    <img src={developer.img} alt={developer.name} />
                                </Link>
                            </div>
                            <div className="developer_info">
                                <Link to={`/channel/${developer.channelId}`}>
                                    {developer.name}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Main>
    )
}

export default Developer