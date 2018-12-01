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
import {
  reqData,
  reqBanner,
  reqsaleIndexVO,
  reqCateList,
  reqnewItemNewUserList,
  reqTopicList,
  reqPopularItemList,
  reqTagList,
  reqPolicyDescList,
  reqCategoryL1List
} from '../api'

export default {
  async reqData ({commit}) {
    const result  = await reqData();
    if (result.code === 0){
      commit(REQ_DATA,{data: result.data})
    }
  },
  async reqBanner ({commit},cb) {
    const focusList = await reqBanner();
    if (focusList.code === 0) {
      commit(REQ_BANNER, {focusList: focusList.focusList})
      typeof cb === 'function' && cb()
    }
  },
  async reqsaleIndexVO ({commit}) {
    const saleIndexVO = await reqsaleIndexVO();
    if (saleIndexVO.code === 0){
      commit(REQ_SALEINDEXVO,{saleIndexVO: saleIndexVO.saleIndexVO})
    }
  },
  async reqCateList ({commit},cb) {
    const cateList = await reqCateList();
    if (cateList.code === 0){
      commit(REQ_CATELIST,{cateList: cateList.cateList})
      typeof cb === 'function' && cb();
    }
  },
  async reqNewItemNewUserList ({commit},cb) {
    const newItemNewUserList = await reqnewItemNewUserList();
    if (newItemNewUserList.code === 0){
      commit(REQ_NEWITEMNEWUSERLIST,{newItemNewUserList: newItemNewUserList.newItemNewUserList})
      typeof cb === 'function' && cb();
    }
  },
  async reqTopicList ({commit},cb){
    const topicList = await reqTopicList();
    if (topicList.code === 0){
      commit(REQ_TOPICLIST,{topicList: topicList.topicList})
      typeof cb === 'function' && cb();
    }
  },
  async reqPopularItemList ({commit},cb){
    const popularItemList = await reqPopularItemList();
    if (popularItemList.code === 0){
      commit(REQ_POPULARITEMLIST,{popularItemList: popularItemList.popularItemList})
      typeof cb === 'function' && cb();
    }
  },
  async reqTagList ({commit},cb){
    const tagList = await reqTagList();
    if (tagList.code === 0){
      commit(REQ_TAGLIST,{tagList: tagList.tagList})
      typeof cb === 'function' && cb();
    }
  },
  async reqPolicyDescList ({commit}){
    const policyDescList = await reqPolicyDescList();
    if (policyDescList.code === 0){
      commit(REQ_POLICYDESCLIST,{policyDescList: policyDescList.policyDescList})
    }
  },
  async reqCategoryL1List ({commit},cb) {
    const categoryL1List = await  reqCategoryL1List();
    if (categoryL1List.code === 0){
      commit(REQ_CATEGORYL1LIST,{categoryL1List: categoryL1List.categoryL1List})
      typeof cb === 'function' && cb()
    }
  }
}
