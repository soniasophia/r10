import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import { goBack } from '../../lib/NavigationHelpers';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles.js';

const Speaker = ({ data }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => goBack()}>
          <Icon name='ios-close' size={36} color='white' style={styles.backbutton} />
        </TouchableOpacity>
        <Text style={styles.aboutSpeaker}>
          About the Speaker
        </Text>
      </View >
      <View style={styles.speakerContainer}>
        <Image
          style={styles.speakerImg}
          source={{ uri: data.image }}
        />
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.bio}>{data.bio}</Text>
      </View>
      <View>
      {/* <TouchableOpacity onPress={() => }> */}
        <Text>Read More on Wikipedia</Text>
      {/* </TouchableOpacity> */}
      </View>
    </ScrollView >
  );
}

Speaker.propTypes = {
  // data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Speaker;