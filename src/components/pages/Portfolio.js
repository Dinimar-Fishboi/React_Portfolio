import React from 'react';
import avatar from './avatar.png'
import { FaGithub } from "react-icons/fa";


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/free-solid-svg-icons'



export default function Portfolio() {
    const styles = {
        text: {
            // display: 'flex',
            color : 'black',
            width: "40%",
            height: "40%",
            alignItems: "center",
            // flexDirectioon: "column",
            justifyContent: 'flex-end',

        },
        border: {
            margin: '5%',
        }
    }

  return (
    <div style={styles.border}> 
        <div className="card" style={styles.text}>
        <img src={avatar} className="card-img img" alt="..."/>
        <div className="card-img-overlay">
            <h5 className="card-title" ><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">Card title</a></h5>
            <p className="card-text" href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"></p>
            <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">
                <FaGithub  style={{fontSize: '50px'}} />
            </a>
        </div>
        </div>
    </div>
    );
}