import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { FaGithub } from "react-icons/fa";
// import './Project.css'

export default function Project({projects}) {

    const styles = StyleSheet.create({
        container: {
           flexDirection: 'row',
           flexWrap: 'wrap',
           justifyContent: "space-evenly",
        },
        card: {
            color: 'black',
            flexWrap: 'wrap',
            width: '45%',
            margin: '2%',
        },
        text: {
            justifyContent: "space-around",
            alignItems: "flex-end",
            flexDirection: "column",
            height: "100%",
            color: '#1B9AAA',
        },
    })
    

    return (
        <div className="container">
            <View style={styles.container} className='container'>
            {projects.map(
                (item) =>   {
                return (
                    <View className="card" style={styles.card} key={item.id}>
                    <div className='card'>
                    <img src={item.img} className="card-img img" alt={item.img} />
                    <div>
                        <Text style={styles.text}> 
                            <div className="card-text" style={{display: "flex"}}>
                                <section className="subtitle">
                                <h5 className="card-title" ><a style={{color: '#1B9AAA'}} href={item.website}>{item.title}</a></h5> 
                                <a href={item.github}>
                                    <FaGithub  style={{fontSize: '40px', color: '#1B9AAA'}} />
                                </a>
                                </section>
                            </div>
                        </Text> 
                    </div>
                    </div>
                    </View>
                      )
                  }
              )
            }
            </View>
        </div>
    )
}