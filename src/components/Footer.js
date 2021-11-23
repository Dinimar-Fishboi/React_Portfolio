import React from 'react';
import { StyleSheet, View } from "react-native";
import { FaGithub, FaLinkedin } from "react-icons/fa";


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
          <a href="https://github.com/Dinimar-Fishboi" className='anchor'>
            <FaGithub  style={{fontSize: '40px', margin: '1rem'}} />
         </a>
         <a href="https://www.linkedin.com/in/taytallis/" className='anchor'>
            <FaLinkedin  style={{fontSize: '40px', margin: '1rem'}} />
         </a>
        </View>
      </>
      );
}