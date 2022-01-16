import React, {useState} from 'react';
import classes from './NavigationItems.module.css';
const NavigationItems = (props) => {
    const yOffset = window.pageYOffset;
    console.log(yOffset)
    const [links, setlinks] = useState([
        {name: 'Home', class:null, lien: 'home'},
        {name: 'About Me', class:null, lien: 'about-me'},
        {name: 'Projects', class:null, lien: 'projects'},
        {name: 'Resume', class:null, lien: 'resume'},
        {name: 'Contact Me', class:null, lien: 'contact'}
    ]);
    const getData = (link, id) => {
        const newlink = {...link, class: classes.Current};
        const data = [
            {name: 'Home', class:null, lien: 'home'},
            {name: 'About Me', class:null, lien: 'about-me'},
            {name: 'Projects', class:null, lien: 'projects'},
            {name: 'Resume', class:null, lien: 'resume'},
            {name: 'Contact Me', class:null, lien: 'contact'}
        ];
        data[id]= newlink;
        setlinks(data); 
    };
    let items= null;
    items = links.map((Link, index) => (
        <li key={Link.lien}>
            <a href={`#${Link.lien}`} 
                onClick={()=>getData(Link, index)}
                className={Link.class} >
                {Link.name} 
            </a> 
        </li>
    ));

    return ( 
        <nav className={classes.NavigationItems}>
            <ul>
                {items}
            </ul>
        </nav>
    )
}   
export default NavigationItems;
