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
import { goToSession } from '../../lib/NavigationHelpers';
import Icon from 'react-native-vector-icons/Ionicons';
import Separator from '../../components/Separator/';
import ScheduleList from '../../components/ScheduleList/';

import { styles } from './styles.js';

const Schedule = ({ scheduleData, faveIds }) => {
  return (
    <View>
      <ScheduleList 
      data={scheduleData}
      faves={faveIds}
      navigatorUID={'schedule'}
      />
    </View>
  );
}

Schedule.propTypes = {
  scheduleData: PropTypes.arrayOf(PropTypes.shape({
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
  goToSession: PropTypes.func,
  faveIds: PropTypes.arrayOf(PropTypes.string)
}

export default Schedule;