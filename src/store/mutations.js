import {
  REQ_DATA,
  REQ_BANNER,
  REQ_SALEINDEXVO,
  REQ_CATELIST,
  REQ_NEWITEMNEWUSERLIST,
  REQ_TOPICLIST,
  REQ_POPULARITEMLIST,
  REQ_TAGLIST,
  REQ_POLICYDESCLIST,
  REQ_CATEGORYL1LIST
} from './mutations-Type'

export default {
  [REQ_DATA] (state,{data}) {
    state.data = data;
  },
  [REQ_BANNER] (state,{focusList}) {
    state.focusList = focusList;
  },
  [REQ_SALEINDEXVO] (state, {saleIndexVO}) {
    state.saleIndexVO  = saleIndexVO;
  },
  [REQ_CATELIST] (state,{cateList}) {
    state.cateList = cateList;
  },
  [REQ_NEWITEMNEWUSERLIST] (state,{newItemNewUserList}) {
    state.newItemNewUserList = newItemNewUserList
  },
  [REQ_TOPICLIST] (state,{topicList}) {
    state.topicList = topicList;
  },
  [REQ_POPULARITEMLIST] (state,{popularItemList}) {
    state.popularItemList = popularItemList;
  },
  [REQ_TAGLIST] (state,{tagList}) {
    state.tagList = tagList;
  },
  [REQ_POLICYDESCLIST] (state,{policyDescList}) {
    state.policyDescList = policyDescList;
  },
  [REQ_CATEGORYL1LIST] (state,{categoryL1List}) {
    state.categoryL1List = categoryL1List;
  }
}
