import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform
} from 'react-native';

import Moment from 'moment';
import { goToSpeaker } from '../../lib/NavigationHelpers';
import Icon from 'react-native-vector-icons/Ionicons';
import { createFave, deleteFave } from '../../config/models';

import { styles } from './styles.js';

const Session = ({ speaker, data }) => {
  return (
    <View>
      <View>
        <Text style={styles.subHeader}>{data.location}</Text>
        <Icon name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'} size={20} color={'black'}/>
        <Text style={styles.header}>{data.title}</Text>
      </View>
      <View>
        <Text style={styles.time}>{Moment.unix(data.start_time).format('h:mm A')}</Text>
      </View>
      <View>
        <Text style={styles.fonts}>{data.description}</Text>
      </View>
      {speaker ?
        <View>
          <Text style={styles.subHeader}>Presented by:</Text>
          <TouchableOpacity onPress={() => goToSpeaker(speaker)}>
            <Image style={styles.image} source={{ uri: speaker.image }} />
            <Text style={styles.speakerFont}>{speaker.name}</Text>
          </TouchableOpacity>
        </View>
        : null}
    </View>
  );
}

Session.propTypes = {
  // data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Session;