import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({title,value}) =>{
 return <View style= {style.cardContainer}>
  <Text style={style.title}> {title} </Text>
  <Text style= {style.value}> {value} </Text>
 </View>}


const style= StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    marginTop:12,
    
  },
  title:{
    flex: 1,
    fontSize: 18,
    fontWeight:"400"
  },
  value:{
    fontSize: 18,
    fontWeight: "600"
  }
})
export default Card;
