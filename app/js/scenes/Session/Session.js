import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  SectionList,
  TouchableOpacity,

} from 'react-native';

import Moment from 'moment';

import { styles } from './styles.js';

const Session = ({ data }) => {
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
    </View>
  );

}

Session.propTypes = {
  // data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Session;