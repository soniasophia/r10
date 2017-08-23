import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  SectionList,
  TouchableOpacity
} from 'react-native';

import Moment from 'moment';

import { styles } from './styles.js';

const Schedule = ({ data }) => {
  return (
    <View>
      <SectionList
        keyExtractor={(item) => (item.session_id)}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => console.log('test')}>
            <View style={styles.container}>
              <Text style={styles.header}>{item.title}</Text>
              <Text style={styles.subHeader}>{item.location}</Text>
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={(item) => (
          <Text style={styles.time}>{Moment.unix(item.section.title).format('h:mm A')}</Text>
        )}
        sections={data}
      />
    </View>
  );
}

Schedule.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Schedule;