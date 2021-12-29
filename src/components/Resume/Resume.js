import React, {useState} from 'react'
import classes from './Resume.module.css';
import Languages from './Languages/Languages';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import Skills from './Skills/Skills';
import Programming from './Programming/Programming';

const Resume = (props) => {
    const [selectedElement, setselectedElement] = useState(<Languages />)

    const getComponentHandler = (id) => {
        switch (id) {
            case 'langues':
                setselectedElement(<Languages/>)
                break;
            case 'education':
                setselectedElement(<Education/>)
                break;
            case 'experience':
                setselectedElement(<Experience/>)
                break;
            case 'skills':
                setselectedElement(<Skills/>)
                break;
            case 'programming':
                setselectedElement(<Programming/>)
                break;
            default: setselectedElement(null)
                break;
        }console.log(id);
        console.log(selectedElement);
    }
    console.log(selectedElement);
    return (
        <div className={classes.Resume} id="resume">
            <h2>My Resume</h2>
            <div className={classes.ResumeContainer}>
                <div className={classes.Row1}>
                    <ul>
                        <li onClick={()=>getComponentHandler('langues')}> Languages</li>
                        <li onClick={()=>getComponentHandler('education')}>Education</li>
                        <li onClick={()=>getComponentHandler('experience')}>Experience</li>
                        <li onClick={()=>getComponentHandler('skills')}>Skills</li>
                        <li onClick={()=>getComponentHandler('programming')}>Programming</li>
                    </ul>
                </div>
                <div className={classes.Row2}>
                   {selectedElement}
                </div>
            </div>
        </div>
    )
}

export default Resume;
