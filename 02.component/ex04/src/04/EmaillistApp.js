import React from 'react';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';

export default function EmaillistApp() {
    return (
        <div className={ 'EmaillistApp' }>
            <SearchBar />
            <Emaillist />
        </div>
    );
}