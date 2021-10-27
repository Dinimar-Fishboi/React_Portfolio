import React from 'react';
import { StyleSheet, View } from "react-native";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";


export default function Footer () {

  const styles = StyleSheet.create ({
    space: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "center",
      position:'absolue',  

    }
  })

    return (
      <>
        <View className="footer" style={styles.space}>
          <a href="https://github.com/Dinimar-Fishboi">
            <FaGithub  style={{fontSize: '40px', margin: '1rem', color: 'white'}} />
         </a>
         <a href="https://www.linkedin.com/in/taytallis/">
            <FaLinkedin  style={{fontSize: '40px', margin: '1rem', color: 'white'}} />
         </a>
         <a href="https://stackoverflow.com">
            <FaStackOverflow  style={{fontSize: '40px', margin: '1rem', color: 'white'}} />
         </a>
        </View>
      </>
      );
}