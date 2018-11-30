import {
  REQ_DATA,
  REQ_BANNER
} from './mutations-Type'
import {reqData,reqBanner} from '../api'

export default {
  async reqData ({commit}) {
    const result  = await reqData();
    commit(REQ_DATA,{data: result.data})
  },
  async reqBanner ({commit},cb) {
    const focusList = await reqBanner();

    commit(REQ_BANNER,{focusList: focusList.focusList})
    typeof cb === 'function' && cb()
  }
}
