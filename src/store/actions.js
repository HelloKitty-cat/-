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
  REQ_CATEGORYL1LIST,
  REQ_TOPICBANNER,
  REQ_COLUMN,
  REQ_RECOMMENDONE,
  REQ_RECOMMENDITEMS,
  REQ_TENFIFTEEN,
  REQ_ZHENONE,
  REQ_ZHENITEMS,
  REQ_YXLOOK,
  REQ_FINDMORE
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
  reqCategoryL1List,
  reqTopicBanner,
  reqColumn,
  reqRecommendOne,
  reqRecommendThree,
  reqRecommendTwo,
  reqTenfifteen,
  reqZhenOne,
  reqZhenThree,
  reqZhenTwo,
  reqYxLook,
  reqFindMore
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
  async reqPolicyDescList ({commit},cb){
    const policyDescList = await reqPolicyDescList();
    if (policyDescList.code === 0){
      commit(REQ_POLICYDESCLIST,{policyDescList: policyDescList.policyDescList})
      typeof cb === 'function' && cb();
    }
  },
  async reqCategoryL1List ({commit},cb) {
    const categoryL1List = await  reqCategoryL1List();
    if (categoryL1List.code === 0){
      commit(REQ_CATEGORYL1LIST,{categoryL1List: categoryL1List.categoryL1List})
      typeof cb === 'function' && cb()
    }
  },
  async reqTopicBanner ({commit},cb) {
    const banner = await reqTopicBanner();
    if (banner.code === 0){
      commit(REQ_TOPICBANNER,{banner: banner.banner})
      typeof cb === 'function' && cb()
    }
  },
  async reqColumn ({commit},cb) {
    const column = await reqColumn();
    if (column.code === 0){
      commit(REQ_COLUMN,{column: column.column})
      typeof cb === 'function' && cb()
    }
  },
  async reqRecommendOne ({commit}) {
    const recommendOne = await reqRecommendOne();
    if (recommendOne.code === 0){
      commit(REQ_RECOMMENDONE,{recommendOne: recommendOne.recommendOne})
    }
  },
  async reqRecommendItems ({commit}) {
    const recommendTwo = await reqRecommendTwo();
    const recommendThree = await reqRecommendThree();

    if (recommendTwo.code === 0 && recommendThree.code === 0){
      commit(REQ_RECOMMENDITEMS,{recommendTwo: recommendTwo.recommendTwo,recommendThree:recommendThree.recommendThree})
    }
  },

  async reqTenfifteen ({commit},cb) {
    const tenfifteen = await reqTenfifteen();
    if (tenfifteen.code === 0){
      commit(REQ_TENFIFTEEN,{tenfifteen: tenfifteen.tenfifteen})
      typeof cb === 'function' && cb()
    }
  },
  async reqZhenOne ({commit}) {
    const zhenOne = await reqZhenOne();
    if (zhenOne.code === 0){
      commit(REQ_ZHENONE,{zhenOne: zhenOne.zhenOne})
    }
  },
  async reqZhenItems ({commit}) {
    const zhenTwo = await reqZhenTwo();
    const zhenThree = await reqZhenThree();
    if (zhenTwo.code === 0 && zhenThree.code === 0){
      commit(REQ_ZHENITEMS,{zhenTwo:zhenTwo.zhenTwo,zhenThree:zhenThree.zhenThree})
    }
  },
  async reqYxLook ({commit}) {
    const yxLook = await reqYxLook();
    if (yxLook.code === 0){
      commit(REQ_YXLOOK,{yxLook: yxLook.yxLook})
    }
  },
  async reqFindMore ({commit}) {
    const findMore = await reqFindMore();
    if (findMore.code === 0){
      commit(REQ_FINDMORE,{findMore: findMore.findMore})
    }
  },
}

