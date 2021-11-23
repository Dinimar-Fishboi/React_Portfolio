import React from 'react';
import { Text, View } from "react-native";
import shark from './shark.jpeg'
import resumePdf from './resumeFiles/dev.pdf'

export default function About() {

  const styles= {
    container: {
      flex : 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    text: {
      flexDirection: 'column',
      width: '75%'
    },
    img: {
      width: '300px',
      height: 'auto', 
    },
  }

  return (
    <div className="border">
      <h1>About</h1>
      <View style={styles.container}>
        <Text style={styles.text}>
          <h3>
            Tay Tallis is a Full Stack Web Developer with a background in E-Learning Development, Relational Aesthetics and Customer Service Systems. 
          </h3>
          <h4>
            They are...
          </h4>
          <ul style={styles.ul}>
            <li>
                Motivated to provide fluid and instinctual UI and UX experiences for users to have simple, instinctual access to online services.
            </li>
            <li>
                Positive and value team environments that are actively inclusive, open and consistently consider how to improve the welfare of their users.
            </li>
            <li>
                Experienced in HTML5, CSS, JavaScript, Bootstrap, jQuery, MySql, and MERN systems.
            </li>
            <li>
                Always bringing a strong collaborative energy with concept-driven execution paired and agile development strategies to all projects they are involved in. 
            </li>
          </ul>
          <p>
            Please download my <a className="resume" download={resumePdf} href={resumePdf}>Resume</a>
          </p>          
        </Text>
        <img src={shark} style={styles.img} alt='avatar'/>
      </View>
    </div>
  );
}