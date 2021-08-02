import React, { useRef }from 'react';
import Guestbook from './Guestbook';
import './assets/css/App.css'

export default function App() {
    const outterRef = useRef(null);
    const innerRef = useRef(null);

    const onScroll = (e) => {
        console.log(outterRef.current.scrollTop); // 위쪽에 있는 높이
        console.log(outterRef.current.clientHeight); // 보이는 화면의 높이
        console.log(innerRef.current.clientHeight); // 안쪽의 화면 높이
        if(outterRef.current.scrollTop + outterRef.current.clientHeight >= innerRef.current.clientHeight) {
            console.log("Fetch!!!");
        }
    };
    
    return (
        <div
            ref={ ref => outterRef.current = ref } 
            className='App'
            onScroll={ onScroll }>
            <div ref={ ref => innerRef.current = ref }>
                <Guestbook />
            </div>
        </div>
    );
}