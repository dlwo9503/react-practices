import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBell as farBell } from '@fortawesome/free-regular-svg-icons'; // 이름이 같으면 별명을 지어서 사용
import { faBell, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export default function App() {
    library.add(farBell, faBell, fab);
    return (
        <Fragment>
            <h2>React Awesome Font Examples</h2>
            { /* regular */ }
            <FontAwesomeIcon icon={ farBell }/>
            <FontAwesomeIcon icon={ ["far", "bell"] }/>

            { /* solid */ }
            <FontAwesomeIcon icon={ faBell }/>
            <FontAwesomeIcon icon={ ["fas", "bell"] }/>

            { /* brands */ }
            <FontAwesomeIcon icon={ ["fab", "github"] } size='2x'/>
            <FontAwesomeIcon icon={ ["fab", "apple"] } size='3x'/>
            <FontAwesomeIcon icon={ ["fab", "google"] } size='4x'/>
            <FontAwesomeIcon icon={ ["fab", "microsoft"] } size='3x' style={ {color: 'skyblue'} }/>
            <FontAwesomeIcon icon={ ["fab", "amazon"] } size='2x' style={ {color: 'orange'} }/>

            { /* size */ }
            <FontAwesomeIcon icon={ faBell } size='xs'/>
            <FontAwesomeIcon icon={ faBell } size='lg'/>
            <FontAwesomeIcon icon={ faBell } size='2x'/>
            <FontAwesomeIcon icon={ faBell } size='3x'/>
            <FontAwesomeIcon icon={ faBell } size='4x'/>

            { /* etc */ }
            <FontAwesomeIcon icon={ faCheckCircle } style={ {color: 'red'} }/>
            <FontAwesomeIcon icon={ faTimesCircle } style={ {color: 'blue'} }/>
        </Fragment>
    );
}