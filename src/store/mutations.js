import {
  REQ_DATA,
  REQ_BANNER
} from './mutations-Type'

export default {
  [REQ_DATA] (state,{data}) {
    state.data = data;
  },
  [REQ_BANNER] (state,{focusList}) {
    state.focusList = focusList;
  }
}
