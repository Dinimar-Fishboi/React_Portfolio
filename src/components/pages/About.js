import React from 'react';
import { Text, View } from "react-native";
import avatar from './avatar.png'


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
    ul: {
      listStyleType: 'none'
    },
    img: {
      width: '200px',
      height: 'auto', 
    },
  }

  return (
    <div className="border">
      <View style={styles.container}>
        <Text style={styles.text}>
          <h1>About Page</h1>
          <h3>
            Dev. Fish is a Full Stack Web Developer with a background in E-Learning Development, Relational Aesthetics and Customer Service Systems. 
          </h3>
          <ul style={styles.ul}>
            <li>
                They are motivated to provide fluid and instinctual UI and UX experiences for users to have simple, instinctual access to online services.
            </li>
            <li>
                They value positive team environments that are actively inclusive, open and consistently consider how to improve the welfare of their users.
            </li>
            <li>
                They have experience in HTML5, CSS, JavaScript, Bootstrap, jQuery, MySql, and MERN systems.
            </li>
            <li>
                They aim to bring strong collaborative energy and concept-driven execution paired with agile development strategies to all projects they are involved in. 
            </li>
            <li>
                They have a Certificate in Full Stack Web Development and a First Class Honours Degree in Visual Art.
            </li>
          </ul>
          </Text>
        <img src={avatar} style={styles.img} alt='avatar'/>
      </View>
    </div>
  );
}