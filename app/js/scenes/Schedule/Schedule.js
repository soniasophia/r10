import React from 'react';
import PropTypes from 'prop-types';
import {
  View
} from 'react-native';

import ScheduleList from '../../components/ScheduleList/';


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