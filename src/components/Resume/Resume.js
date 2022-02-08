import React, {useState,useEffect} from 'react'
import classes from './Resume.module.css';
import Languages from './Languages/Languages';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import Skills from './Skills/Skills';
import Programming from './Programming/Programming';
import Frameworks from './Frameworks/Frameworks';

const Resume = (props) => {
    const [selectedElement, setselectedElement] = useState(<Languages />);
    const [listItems, setListItems] = useState(
        [{name: "Langues", class: null, component: <Languages />},
        {name: "Education", class: null, component: <Education/>},
        {name: "Experience" ,class: null, component: <Experience/> },
        {name: "Soft skills" ,class: null, component: <Skills/> },
        {name: "Programming" ,class: null, component: <Programming/> },
        {name: "Frameworks" ,class: null, component: <Frameworks/> }
    ]);

    const getComponentHandler= (list,id) => {
        const tlist= [{name: "Langues", class: null, component: <Languages />},
        {name: "Education", class: null, component: <Education/>},
        {name: "Experience" ,class: null, component: <Experience/> },
        {name: "Soft skills" ,class: null, component: <Skills/> },
        {name: "Programming" ,class: null, component: <Programming/> },
        {name: "Frameworks" ,class: null, component: <Frameworks/> }
    ];
        const newList = {...list, class: classes.Active};
        tlist[id]= newList;
        setselectedElement(list.component);
        setListItems(tlist );
    }
    
    return (
        <div className={classes.Resume} id="resume">
            <div className="container">
                <h2>My Resume</h2>
                <div className={classes.ResumeContainer}>
                    <div className={classes.Row1}>
                        <ul>
                            {listItems.map((list,index)=> <li onClick={()=>getComponentHandler(list,index)} className={list.class} key={index}>{list.name}</li>)}
                        </ul>
                    </div>
                    <div className={classes.Row2}>
                    {selectedElement}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;
