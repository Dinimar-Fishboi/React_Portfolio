import React from 'react';
import resumePdf from './resumeFiles/dev.pdf'

export default function Resume() {

   const frontEnd = [
     'HTML', 'CSS3', 'JavaScript', 'JQuery', 'Bootstrap', 'React'
   ]

   const backEnd = [
     "API's", "Node", "Express", "MySql, Sequelize", "MongoDB, Mongoose", "REST", "GraphQL"
   ]

  return (
    <div className="border">
      <h1>Resume</h1>
      <p>
        Please download my <a download={resumePdf} href={resumePdf}>Resume</a>
      </p>
      <div>
        <h3> Front-end</h3>
        <ul>
            {frontEnd.map(
              (item) => {
                return (
                  <li>
                    {item}
                  </li>
                )
              }
            )}
        </ul>
        <h3> Back-end</h3>
        <ul>
            {backEnd.map(
              (item) => {
                return (
                  <li>
                    {item}
                  </li>
                )
              }
            )}
        </ul>
      </div>
    </div>
  );
}