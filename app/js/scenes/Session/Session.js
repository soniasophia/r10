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
import { createFave, removeFave } from '../../config/models';
import Button from '../../components/Button/';
import Separator from '../../components/Separator/';

import { styles } from './styles.js';

const Session = ({ speakerData, sessionData, faveIds }) => {
  const matchedFaveId = faveIds.find(faveId => faveId === sessionData.session_id)

  return (
    <View>
      <View>
        <Text style={styles.subHeader}>{sessionData.location}</Text>
        <View>
          {(matchedFaveId) ? 
          <Icon name={Platform.OS ==='ios'? 'ios-heart' : 'md-heart'} size={17} style={styles.heart} />
          : null}
        </View>
        <Text style={styles.header}>{sessionData.title}</Text>
      </View>
      <View>
        <Text style={styles.time}>{Moment.unix(sessionData.start_time).format('h:mm A')}</Text>
      </View>
      <View>
        <Text style={styles.fonts}>{sessionData.description}</Text>
      </View>
      {speakerData ?
        <View>
          <Text style={styles.subHeader}>Presented by:</Text>
          <TouchableOpacity onPress={() => goToSpeaker(speakerData)}>
            <Image style={styles.image} source={{ uri: speakerData.image }} />
            <Text style={styles.speakerFont}>{speakerData.name}</Text>
          </TouchableOpacity>
        </View>
        : null}
      <Separator />
      <Button 
        text={
          (matchedFaveId) 
          ? "Remove from Faves" 
          : "Add to Faves"
          }
        onPress={
          (matchedFaveId) 
          ? () => removeFave(sessionData.session_id) 
          : () => createFave(sessionData.session_id)
          }
      />
    </View>
  );
}

Session.propTypes = {
  speakerData: PropTypes.objectOf(PropTypes.string),
  faveIds: PropTypes.arrayOf(PropTypes.string),
  sessionData: PropTypes.shape({
    description: PropTypes.string,
    location: PropTypes.string,
    session_id: PropTypes.string,
    speaker: PropTypes.string,
    start_time: PropTypes.number,
    title: PropTypes.string
  })
}

export default Session;