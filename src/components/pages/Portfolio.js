import React from 'react';
import avatar from './avatar.png'
import { FaGithub } from "react-icons/fa";

export default function Portfolio({projects}) {
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
    }

  return (
    <div style={styles.border} className="border"> 
        <h1>Portfolio</h1>
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
        <div>
        {/* TODO: Copy above template into map function and update sections that will be changed dynamically */}
        {projects.map(
                (item) =>   {
                    console.log(item)
                return (
                    <li className="nav-item" key={item.id}>
                      
                        {item.title}
                    </li>
                      )
                  }
              )
            }
        </div> 
    </div>
    );
}