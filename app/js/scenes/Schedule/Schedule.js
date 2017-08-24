import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  SectionList,
  TouchableOpacity,
  ItemSeparatorComponent
} from 'react-native';

import Moment from 'moment';
import { goToSession } from '../../lib/NavigationHelpers';
import Separator from '../../components/Separator/';

import { styles } from './styles.js';

const Schedule = ({ data }) => {
  return (
    <View>
      <SectionList
        keyExtractor={(item) => (item.session_id)}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => goToSession("schedule", item)}>
            <View style={styles.container}>
              <Text style={styles.header}>{item.title}</Text>
              <Text style={styles.subHeader}>{item.location}</Text>
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <Separator />}
        renderSectionHeader={(item) => (
          <Text style={styles.time}>{Moment.unix(item.section.title).format('h:mm A')}</Text>
        )}
        sections={data}
      />
    </View>
  );
}

Schedule.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
          description: PropTypes.string,
          location: PropTypes.string,
          session_id: PropTypes.string,
          speaker: PropTypes.string,
          start_time: PropTypes.number,
          title: PropTypes.string
      })),
      title: PropTypes.number
  })),
  goToSession: PropTypes.func.isRequired
}

export default Schedule;