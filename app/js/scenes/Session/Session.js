import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import Moment from 'moment';
import { goToSpeaker } from '../../lib/NavigationHelpers';

import { styles } from './styles.js';

const Session = ({ speaker, data }) => {
  return (
    <View>
      <View>
        <Text style={styles.subHeader}>{data.location}</Text>
        <Text style={styles.header}>{data.title}</Text>
      </View>
      <View>
        <Text style={styles.time}>{Moment.unix(data.start_time).format('h:mm A')}</Text>
      </View>
      <View>
        <Text style={styles.fonts}>{data.description}</Text>
      </View>
      <View>
        <Text style={styles.subHeader}>Presented by:</Text>
      </View>
      <View>
      <TouchableOpacity onPress={()=>goToSpeaker(speaker)}>
        <Image style={styles.image} source={{ uri: speaker.image }} />
        <Text style={styles.speakerFont}>{speaker.name}</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

Session.propTypes = {
  // data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Session;