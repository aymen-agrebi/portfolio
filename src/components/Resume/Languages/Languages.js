import React from 'react'
import './Languages.css'
const Languages = () => {
   
    return (
        <div className="Languages" >
            <div className="Language">
                <div className="Language-name">English</div>
                <div className="Language-bar">
                    <div className="Language-per" per="98%" style={{width: "98%"}}></div>
                </div>
            </div>
            <div className="Language">
                <div className="Language-name">French</div>
                <div className="Language-bar">
                    <div className="Language-per" per="90%" style={{width: "90%"}}></div>
                </div>
            </div>
            <div className="Language">
                <div className="Language-name">Arabe</div>
                <div className="Language-bar">
                    <div className="Language-per" per="99%" style={{width: "99%"}}></div>
                </div>
            </div>
            <div className="Language">
                <div className="Language-name">Coding</div>
                <div className="Language-bar">
                    <div className="Language-per" per="100%" style={{width: "100%"}}></div>
                </div>
            </div>
        </div>
    )
}

export default Languages
