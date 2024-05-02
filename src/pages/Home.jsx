import React, { useEffect, useState } from 'react'
import Main from '../components/layout/Main';
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import VideoSlider from '../components/videos/VideoSlider'
import { developerText } from '../data/developer';

function Home(props) {
    const [accessToken, setAccessToken] = useState('');
    const CLIENT_ID=process.env.REACT_APP_SPOTIFY_CLIENT_ID
    const REDIRECT_URI =process.env.REACT_APP_SPOTIFY_REDIRECT_URI 
    const AUTH_ENDPOINT =process.env.REACT_APP_SPOTIFY_AUTH_ENDPOINT 
    const RESPONSE_TYPE = process.env.REACT_APP_SPOTIFY_RESPONSE_TYPE
    const token = localStorage.getItem('accessToken'); // Spotify 액세스 토큰

    useEffect(() => {
      // URL에서 액세스 토큰 파싱
      const hash = window.location.hash;
  
      if (hash) {
        const token = hash.split('&').find(elem => elem.startsWith('#access_token'));
        if (token) {
          const accessTokenValue = token.split('=')[1];
          setAccessToken(accessTokenValue);
          // 액세스 토큰을 localStorage에 저장하거나 다른 곳에 보관할 수 있습니다.
          localStorage.setItem('accessToken', accessTokenValue);
        }
      }
    }, []);

    const handleLogin = () => {
      // Spotify 로그인 창 열기
      window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
    };

    return (
        <Main 
            title = "음악 추천 사이트"
            description="MRP-Project 사이트에 오신 것을 환영합니다.">
            <Today title="🥰 오늘의 추천 PlayList" id="developer" />
            <Developer videos={developerText} title="😪 추천 PlayList 채널들을 소개합니다." id="developer" />
            {token ? 
              (
                  <>
                    <VideoSlider track="37i9dQZEVXbMDoHDwVN2tF" title="😛 TOP 50 - 글로벌" id="top50" />
                    <VideoSlider track="37i9dQZF1DXe5W6diBL5N4" title="🤗 K-POP 플레이리스트" id="kpop" />
                    <VideoSlider track="37i9dQZF1DWW46Vfs1oltB" title="😮 힙합 플레이리스트" id="hiphop" />
                  </>
              ) : (
                  <>
                    <div className="video_more">
                        <button onClick={handleLogin}>금주 음악 리스트 불러오기</button>
                    </div>
                  </>
              )
            }
        </Main>
    )
}

export default Home