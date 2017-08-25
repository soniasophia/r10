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
// import ScheduleList from '../../components/ScheduleList/';

import { styles } from './styles.js';

const Schedule = ({ scheduleData, faveIds }) => {
  return (
    <View>
      <SectionList
        keyExtractor={(item) => (item.session_id)}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => goToSession("schedule", item)}>
            <View style={styles.container}>
              <Text style={styles.header}>{item.title}</Text>
              <Text style={styles.subHeader}>{item.location}</Text>
              <View>
                {(faveIds.find(fave => fave === item.session_id)) ?
                  <Icon name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'} size={17} style={styles.heart}/>
                  : null}
              </View>
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <Separator />}
        renderSectionHeader={(item) => (
          <Text style={styles.time}>{Moment.unix(item.section.title).format('h:mm A')}</Text>
        )}
        sections={scheduleData}
      />
      {/* <ScheduleList 
      data={this.props.scheduleData}
      faves={this.props.faveIds}
      navigatorUID={'schedule'}
      /> */}
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