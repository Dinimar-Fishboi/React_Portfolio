import React from 'react';
import Project from './Project';
import imageFiles from './tinified/index.js';


export default function Portfolio() {

    const publicProjects = [
        {
            title: 'Barter Place',
            img: imageFiles.barter,
            github: "https://github.com/Dinimar-Fishboi/Project_2_team3",
            website: "https://project2t3.herokuapp.com/",
            id: 1,
        },
        {
            title: "Help I'm Bored",
            img: imageFiles.bored,
            github: "https://github.com/rajnidua/project-one",
            website: "https://rajnidua.github.io/project-one/",
            id: 2,
        },
        {
            title: 'Note Taker',
            img: imageFiles.note,
            github: "https://github.com/Dinimar-Fishboi/NoteTaker",
            website: "https://eleven-note-take.herokuapp.com/",
            id: 3,
        },
        {
            title: 'Budget Tracker',
            img: imageFiles.budget,
            github: "https://github.com/Dinimar-Fishboi/Budget_Tracker",
            website: "https://boiling-brook-13121.herokuapp.com",
            id: 4,
        },
        {
            title: 'Password Generator',
            img: imageFiles.password,
            github: "https://github.com/Dinimar-Fishboi/PasswordGenerator",
            website: "https://dinimar-fishboi.github.io/PasswordGenerator/",
            id: 5,
        },
        {
            title: 'Work Day Scheduler',
            img: imageFiles.workday,
            github: "https://github.com/Dinimar-Fishboi/Work-Day-Scheduler",
            website: "https://dinimar-fishboi.github.io/Work-Day-Scheduler/",
            id: 6,
        }
        
    ]

  return (
    <div className="border"> 
        <h1>Portfolio</h1>
        <div>
            <Project projects={publicProjects}/>
        </div> 
    </div>
    );
}