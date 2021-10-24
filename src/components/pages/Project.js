import React from 'react';
import { FaGithub } from "react-icons/fa";

export default function Project({projects}) {
    const styles = {
        text: {
            display: 'flex',
            color : 'black',
            width: "40%",
            height: "40%",
            alignItems: "center",
            // flexDirectioon: "column",
            justifyContent: 'flex-end',
            flexWrap: "wrap",
        },
    }

    return (
        <>
             {projects.map(
                (item) =>   {
                return (
                    <div className="card" style={styles.text} key={item.id}>
                    <img src={item.img} className="card-img img" alt={item.img}/>
                    <div className="card-img-overlay">
                        <h5 className="card-title" ><a href={item.website}>{item.title}</a></h5>
                        <p className="card-text" href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"></p>
                        <a href={item.github}>
                            <FaGithub  style={{fontSize: '50px'}} />
                        </a>
                    </div>
                </div>
                      )
                  }
              )
            }
        </>
    )
}