import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import { FaHtml5, FaCss3, FaBootstrap, FaReact, FaNode, } from "react-icons/fa";
import { DiJavascript1,} from "react-icons/di"
import { SiExpress, SiMysql, SiSequelize, SiMongodb, SiApollographql, SiGraphql } from "react-icons/si"
import { StyleSheet, Text, View, Image } from "react-native";

const Badge = styled.section`
    font-size: 50px;
    color: white;
    padding: 1em;
`

export default function Social() {

    const faArray = [
        <FaHtml5/>, <FaCss3/>, <DiJavascript1/> , <FaBootstrap/>, <FaReact/>, <FaNode/>, <SiExpress/>, <SiMysql/>, <SiSequelize/>, <SiMongodb/>, <SiApollographql/>, <SiGraphql/> 
    ]

    const styles = {
        badge: {
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            width: '50%',
            color: 'white',
        },
        text: {
            flexDirection: 'row',
            color: 'white',
            padding: '4em',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            
        },
        border: {
            borderStyle: 'solid',
            border: '2px',
            borderColor: 'blueviolet',
            padding: '3%',
        },
        list: {
            listStyle: 'none',
        },
        container: {
            flexDirection: 'row',
        }
    }

    return (
        <>
        <Container style={styles.container}>
            <View style={styles.container}>
            <View className='badges' style={styles.badge}>
                {/* place all badges here */}
                {faArray.map(
                    (item, index) => {
                        return (
                            <Badge key={index}>
                                {item}
                            </Badge>
                        )
                    }
                )}
            </View> 
            <Text style={styles.text}>
                <div style={styles.border, {borderColor: 'blueviolet'}}>
                    <h6>
                        Where to find me...
                    </h6>
                    <ul style={styles.list}>
                        <li>
                            Email: taytallis01@gmail.com
                        </li>
                        <li>
                            Github: https://github.com/Dinimar-Fishboi
                        </li>
                        <li>
                            LinkedIn: https://www.linkedin.com/in/taytallis/
                        </li>
                    </ul>
                </div>
            </Text>
            </View>
        </Container>
        </>
    )

}