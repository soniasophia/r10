import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  FlatList,
  Image,
  View,
  ScrollView
} from 'react-native';

import { styles } from './styles.js';
import Separator from '../../components/Separator/';
import ConductItem from '../../components/ConductItem/';


const About = ({ data }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerImage}>
          <Image
            source={require('.././../assets/images/r10_logo.png')} />
        </View>
        <Separator />
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
              <ConductItem data={item} />
          }
          keyExtractor={(item, index) => index}
        />
        <Separator />
        <Text style={styles.header}>&copy; Red Academy 2017</Text>
      </View>
    </ScrollView>
  );
}

About.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default About;