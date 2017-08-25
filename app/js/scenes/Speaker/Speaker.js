import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking
} from 'react-native';

import { goBack } from '../../lib/NavigationHelpers';
import Button from '../../components/Button/';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles.js';

const Speaker = ({ speakerData }) => {
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
          source={{ uri: speakerData.image }}
        />
        <Text style={styles.name}>{speakerData.name}</Text>
        <Text style={styles.bio}>{speakerData.bio}</Text>
      </View>
      <View>
      <Button 
        text='Read More on Wikipedia'
        onPress={() => Linking.openURL(speakerData.url).catch(err => ('An error occurred', err))}
      />
      </View>
    </ScrollView >
  );
}

Speaker.propTypes = {
  speakerData: PropTypes.objectOf(PropTypes.string)
}

export default Speaker;