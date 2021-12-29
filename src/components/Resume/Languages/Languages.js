import React from 'react'
import './Languages.css'
const Languages = () => {
    return (
        <div className="Languages">
            <div className="Language">
                <div className="Language-name">English</div>
                <div className="Language-bar">
                    <div className="Language-per" per="99"></div>
                </div>
            </div>
            <div className="Language">
                <div className="Language-name">French</div>
                <div className="Language-bar">
                    <div className="Language-per" per="90"></div>
                </div>
            </div>
            <div className="Language">
                <div className="Language-name">Arabe</div>
                <div className="Language-bar">
                    <div className="Language-per" per="95"></div>
                </div>
            </div>
            <div className="Language">
                <div className="Language-name">Spanish</div>
                <div className="Language-bar">
                    <div className="Language-per" per="70"></div>
                </div>
            </div>
        </div>
    )
}

export default Languages
