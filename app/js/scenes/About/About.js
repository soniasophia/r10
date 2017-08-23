import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  StyleSheet,
  FlatList,
  Image,
  View,
  ScrollView
} from 'react-native';

import { styles } from './styles.js';


const About = ({ data }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerImage}>
          <Image
            source={require('.././../assets/images/r10_logo.png')} />
        </View>
        <View>
          <Text style={styles.header}>R10 is a conference that focuses on just about any topic related to dev.</Text>
        </View>
        <View>
          <Text style={styles.fonts}>Date & Venue</Text>
        </View>
        <View>
          <Text style={styles.header}>The R10 conference will take place on Tuesday, June 27th, 2017 in Vancouver, BC.</Text>
        </View>
        <View>
          <Text style={styles.fonts}>Code of Conduct</Text>
        </View>
        <FlatList
          data={data}
          renderItem={({ item }) =>
            <View style={styles.container}>
              <Text style={styles.headings}>+ {item.title}</Text>
              <Text style={styles.header}>{item.description}</Text>
            </View>}
          keyExtractor={(item, index) => index}
        />
      </View>
    </ScrollView>
  );
}

About.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default About;