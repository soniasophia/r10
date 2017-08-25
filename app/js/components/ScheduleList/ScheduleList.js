import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  SectionList,
  TouchableOpacity,
  ItemSeparatorComponent,
  Platform
} from 'react-native';

import Moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import { goToSession } from '../../lib/NavigationHelpers';
import Separator from '../Separator/';
import { styles } from './styles';

const ScheduleList = ({ data, faves, navigatorUID }) => {
  return (
    <View>
      <SectionList
        keyExtractor={(item) => (item.session_id)}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => goToSession(navigatorUID, item)}>
            <View style={styles.container}>
              <Text style={styles.header}>{item.title}</Text>
              <Text style={styles.subHeader}>{item.location}</Text>
              <View>
                {(faves.find(fave => fave === item.session_id)) ?
                  <Icon name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'} size={17} style={styles.heart} />
                  : null}
              </View>
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

ScheduleList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    location: PropTypes.string,
    session_id: PropTypes.string,
    speaker: PropTypes.string,
    start_time: PropTypes.number,
    title: PropTypes.number
  })),
  title: PropTypes.number,
  goToSession: PropTypes.func,
  faves: PropTypes.arrayOf(PropTypes.string),
  navigatorUID: PropTypes.string
}

export default ScheduleList;
