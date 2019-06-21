import React from 'react';
import './WebPage.css'; 

function WebPage(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
        <header>
            <h1 className={className}>Auto text Country Edition</h1>
        </header>
        </div>
    )
}
export default WebPage