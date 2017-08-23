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
export default realm;

