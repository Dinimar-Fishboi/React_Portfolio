import React from 'react';
import { StyleSheet, Text, View, Image } from "react-native";
import { FaGithub } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Project({projects}) {

    const styles = StyleSheet.create({
        container: {
           flexDirection: 'row',
           flexWrap: 'wrap',
           justifyContent: "space-evenly",
        },
        card: {
            flexWrap: 'wrap',
            // width: '100%',
            margin: '2%',
        },
        text: {
            justifyContent: "space-around",
            alignItems: "flex-end",
            flexDirection: "column",
            height: "100%",
            // color: '#1B9AAA',
        },
        img: {
            // width: '100%',
            height: '450px',
            // resizeMode: true,
        }
    })
    

    return (
        <Container>
        <div className="container">
            <Row lg={12} md={12} sm={12} xs={12}>
            <View style={styles.container} className='container'>
            {projects.map(
                (item) =>   {
                return (
                    <Col lg={6} md={12} sm={12} xs={12}>
                    <View className="card" style={styles.card} key={item.id} >
                    <div className='card'>
                    <Image source={item.img} className="card-img img" alt={item.img} style={styles.img}/>
                    <div>
                        <Text style={styles.text}> 
                            <div className="card-text" style={{display: "flex"}}>
                                <section className="subtitle">
                                <h5 className="card-title" ><a className="anchor" href={item.website}>{item.title}</a></h5> 
                                <a href={item.github} className='anchor'>
                                    <FaGithub  style={{fontSize: '40px'}} />
                                </a>
                                </section>
                            </div>
                        </Text> 
                    </div>
                    </div>
                    </View>
                    </Col>
                      )
                  }
              )
            }
            </View>
            </Row>
        </div>
        </Container>
    )
}