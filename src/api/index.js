import ajax from './ajax'


//home nav数据
export const reqData = () => ajax('/data')

//home banner数据
export const reqBanner = () => ajax('/banner')

//home 福利
export const reqsaleIndexVO = () => ajax('/saleIndexVO')

//home nav总数据
export const reqCateList = () =>ajax('/cateList')

//home 新品下的list
export const reqnewItemNewUserList = () => ajax('/newItemNewUserList')
//home 专题精选 下的list
export const reqTopicList = () => ajax('/topicList')

//home 下面最终的list
export const reqPopularItemList = () => ajax('/popularItemList')

//home 下品牌的list
export const reqTagList = () => ajax('/tagList')

//home 下banner的提示
export const reqPolicyDescList =() =>ajax('/policyDescList')

// item 下左右侧的数据
export const reqCategoryL1List = () => ajax('/categoryL1List')
