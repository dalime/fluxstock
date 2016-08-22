import axios from 'axios';
import ServerActions from './actions/ServerActions';

const API = {
  getLookup(text) {
    axios.get(`/api/lookups/${text}`)
      .then(res => res.data)
      .then(ServerActions.receiveLookups)
      .catch(console.error);
  }
}

export default API;
