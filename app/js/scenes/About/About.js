import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  StyleSheet,
  FlatList,
  Image,
  View
} from 'react-native';

import { styles } from './styles.js';


const About = ({ data }) => {
  return (
    <View>
      <View>
        <Image
          source={require('.././../assets/images/r10_logo.png')} />
      </View>
      <View>
        <Text>R10 is a conference that focuses on just about any topic related to dev.</Text>
      </View>
      <View>
        <Text>Date & Venue</Text>
      </View>
      <View>
        <Text>The R10 conference will take place on Tuesday, June 27th, 2017 in Vancouver, BC.</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) =>
          <View style={styles.container}>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}


export default About;