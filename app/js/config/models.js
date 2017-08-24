import Realm from 'realm';

const Fave = {
  name: 'Fave',
  primaryKey: 'id',
  properties: {
    id: 'string',
    faved_on: 'date'
  }
}

const realm = new Realm({schema: [Fave]});
// console.log(realm.path);

export const createFave = (faveId) => {
  realm.write(() => {
    realm.create('Fave', {id: faveId, faved_on: new Date})
  });
}

export const queryFave = () => {
  let faveId = realm.objects('Fave').map((fave) => fave.id)
  return faveId
}

export const removeFave = (faveId) => {
  realm.write(() => {
    let fave = realm.objects('Fave').filtered('id == $0', faveId)
    realm.delete(fave)
    return fave
  })
}

export default realm;

