import { queryFave } from '../config/models';

// Helper to format individual Firebase records
export const formatDataObject = (data) => {
  const dataObject = Object.getOwnPropertyNames(data).map(index => data[index]);
  return dataObject[0];
}

// Helper to format Firebase data into section list data
export const formatSessionData = (sessions) => {
  return sessions.reduce((acc, curr) => {
    const timeExists = acc.find(section => section.title === curr.start_time)
    timeExists ? timeExists.data.push(curr) : acc.push({title: curr.start_time, data: [curr]});
    return acc;
  }, []).sort((a, b) => a.title - b.title);
};

export const filterFaves = (data) => {
  let faves = queryFave();
   const faved_sessions = data.filter((item)=> {
    return faves.find(fave => fave.id === item.session_id)
  });
  return faved_sessions;
}