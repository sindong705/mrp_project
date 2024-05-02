import React, { useEffect, useState } from 'react'

import { todayText } from '../../data/today'
import { Link } from 'react-router-dom'

function Today({ title, id }) {
    const [loading, setLoading] = useState(true); 
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    const todayClass = loading ? 'isLoading' : 'isLoaded';
    return (
        <section id={id} className={todayClass}>
            <h2>{title}</h2>
            <div className='today_inner'>
                <div className='today_thumb play_icon'>
                    <Link to={todayText[0].page}>
                        <img src={todayText[0].img} alt={todayText[0].title} />
                    </Link>
                </div>
                <div className='today_text'>
                    <span className='today'>today!</span>
                    <h3 className='title'>
                        <Link to={todayText[0].page}>{todayText[0].title}</Link>
                    </h3>
                    <p className='desc'>{todayText[0].desc}</p>
                    <div className='info'>
                        <span className='author'>
                            <Link to={`/channel/${todayText[0].channelId}`}>{todayText[0].author}</Link>
                        </span>
                        <span className='date'>{todayText[0].date}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Today