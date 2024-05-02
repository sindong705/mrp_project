import React, { useEffect, useState } from 'react'
import Main from '../components/layout/Main'
import { todayText } from '../data/today'

import { Link } from 'react-router-dom'

function Today(props) {
    const [loading, setLoading] = useState(true); 
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    const todayClass = loading ? 'isLoading' : 'isLoaded';
    return (
        <Main 
            title = "오늘의 추천 PlayList"
            description="오늘의 추천 PlayList 영상입니다.">
            
            <section id='todayPage' className={todayClass}>
                <h2>🥰 오늘의 추천 PlayList</h2>

                {todayText.map((today, key) => (
                    <div className='today_inner' key={key}>
                        <div className='today_thumb play_icon'>
                            <Link to={today.page}>
                                <img src={today.img} alt={today.title} />
                            </Link>
                        </div>
                        <div className='today_text'>
                            <span className='today'>today!</span>
                            <h3 className='title'>
                                <Link to={today.page}>{today.title}</Link>
                            </h3>
                            <p className='desc'>{today.desc}</p>
                            <div className='info'>
                                <span className='author'>
                                    <Link to={`/channel/${today.channelId}`}>{today.author}</Link>
                                </span>
                                <span className='date'>{today.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </Main>
    )
}

export default Today