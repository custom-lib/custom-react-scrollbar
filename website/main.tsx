import React from 'react';
import ReactDOM from 'react-dom';
import Stats from 'stats.js';
import App from './App';
import './index.scss';


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);


const stats = new Stats();
stats.showPanel(0);
document.body.appendChild( stats.dom );

function animate() {
	stats.begin();
	stats.end();
	requestAnimationFrame( animate );
}

requestAnimationFrame( animate );