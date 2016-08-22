import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  receiveLookups(lookups) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_LOOKUPS',
      lookups
    })
  }
}

export default ServerActions;
