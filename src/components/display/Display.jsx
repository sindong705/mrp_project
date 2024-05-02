import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../layout/Main';

const Home = lazy(() => import('../../pages/Home'));
const Today = lazy(() => import('../../pages/Today'));
const Developer = lazy(() => import('../../pages/Developer'));
const Channel = lazy(() => import('../../pages/Channel'));
const Video = lazy(() => import('../../pages/Video'));
const Search = lazy(() => import('../../pages/Search'));
const Not = lazy(() => import('../../pages/Not'));
const Hiphop = lazy(() => import('../../pages/Hiphop'));
const Top50 = lazy(() => import('../../pages/Top50'));
const Kpop = lazy(() => import('../../pages/Kpop'));
const Musicdetail = lazy(() => import('../../pages/Musicdetail'));

function Display(props) {
    return (
        <Suspense fallback={<Main />}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/today" element={<Today />} />
                <Route path="/developer" element={<Developer />} />
                <Route path="/hiphop" element={<Hiphop />} />
                <Route path="/top50" element={<Top50 />} />
                <Route path="/kpop" element={<Kpop />} />
                <Route path='/channel/:channelId' element={<Channel />} />
                <Route path='/video/:videoId' element={<Video />} />
                <Route path='/search/:searchId' element={<Search />} />
                <Route path='/detail/:trackId' element={<Musicdetail />} />
                <Route path="*" element={<Not />} />
            </Routes>
        </Suspense>
    );
}

export default Display;