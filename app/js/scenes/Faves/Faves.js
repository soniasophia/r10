import React from 'react';
import PropTypes from 'prop-types';
import ScheduleList from '../../components/ScheduleList/';

import { styles } from './styles.js';

const Faves = ({faveData, faveIds}) => {
  return (
    <ScheduleList 
      data={faveData}
      faves={faveIds}
      navigatorUID={'faves'}
    />
  );
}

Faves.propTypes = {
  faveData: PropTypes.arrayOf(PropTypes.shape({
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
  faveIds: PropTypes.arrayOf(PropTypes.string)
}

export default Faves;

