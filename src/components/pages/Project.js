import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { FaGithub } from "react-icons/fa";

export default function Project({projects}) {

    const styles = StyleSheet.create({
        container: {
           flex: 2,
           flexDirection: 'row',
           flexWrap: 'wrap',
        },
        card: {
            color: 'black',
            flexWrap: 'wrap',
            minWidth: '40%',
            flex: 2,
            margin: '2%',
        },
        text: {
            justifyContent: "space-around",
            alignItems: "flex-end",
            flexDirection: "column",
            height: "100%",
        }
    })
    

    return (
        <>
            <View style={styles.container}>
            {projects.map(
                (item) =>   {
                return (
                    <View className="card" style={styles.card} key={item.id}>
                    <img src={item.img} className="card-img img" alt={item.img} />
                    <div className="card-img-overlay">
                        <Text style={styles.text}> 
                            <div className="card-text" style={{display: "flex"}}>
                                <section className="subtitle">
                                <h5 className="card-title" ><a href={item.website}>{item.title}</a></h5> 
                                <a href={item.github}>
                                    <FaGithub  style={{fontSize: '40px'}} />
                                </a>
                                </section>
                            </div>
                        </Text> 
                    </div>
                    </View>
                      )
                  }
              )
            }
            </View>
             {/* {projects.map(
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
            } */}
        </>
    )
}