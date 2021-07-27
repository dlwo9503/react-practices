import React from 'react'; // 쓰든 안쓰든 있어야 함
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    // <App />, 
    React.createElement(App, null, null),
    document.getElementById('root'));