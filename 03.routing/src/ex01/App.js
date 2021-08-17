import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Main from './component/Main';
import Guestbook from './component/Guestbook';
import Gallery from './component/Gallery';

export default function App() {
    return (
        <HashRouter>
            <Route exact path='/' component={Main} /> {/*exact를 해야 정확할 때만 실행하도록 해줌*/}
            <Route path='/guestbook' component={Guestbook} />
            <Route path='/gallery' component={Gallery} />
        </HashRouter>
    );
}