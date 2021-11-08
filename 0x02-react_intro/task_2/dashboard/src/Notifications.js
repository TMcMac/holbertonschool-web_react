import React from 'react';
import './Notifications.css'
import closeIcon from './close-icon.png'
import { getLatestNotification } from './utils'

const Notifications = () => {
    function closeClick() {
        console.log('Close button has been clicked')
    }
    return (
        <div className="Notifications">
            <p>Here is the list of notifications
                <button style={{ position: "relative", top: "-50px", right: "-900px"}} aria-label="Close" onClick={closeClick}>
                    <img src={closeIcon} alt="close" style={{ height: "45px", width: "45px" }}></img>
                </button>
            </p>
                <ul>
                    <li data-priority="default">New course available</li>
                    <li data-priority="urgent">New resume available</li>
                    <li dangerouslySetInnerHTML={{ __html: getLatestNotification()}} data-priority="urgent"/>
                </ul>
        </div>
    );
        
}

export default Notifications;
