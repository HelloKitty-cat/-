/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './data.json'
import data_nav from './data_nav.json'
import home_data from './home_data.json'
import shiwu_data from './shiwu_data.json'

// 返回data的接口
Mock.mock('/data', {code:0, data: data})
//返回首页轮播图片的接口
Mock.mock('/banner', {code:0, focusList: home_data.focusList})
//返回home页数据的接口
Mock.mock('/home', {code:0, home: home_data})

//home nav数据总数组
Mock.mock('/cateList', {code:0, cateList: home_data.cateList})

//home 下人气推荐的list
Mock.mock('/newItemNewUserList',{code:0,newItemNewUserList: home_data.newItemNewUserList})
//home 下人气推荐的list
Mock.mock('/popularItemList',{code:0,popularItemList: home_data.popularItemList})


//home 下品牌的list
Mock.mock('/tagList',{code:0,tagList: home_data.tagList})

//home 下专题下的list
Mock.mock('/topicList',{code: 0,topicList: home_data.topicList})

//home banner下的list
Mock.mock('/policyDescList',{code: 0,policyDescList: home_data.policyDescList})

Mock.mock('/saleIndexVO', {code:0, saleIndexVO: home_data.saleIndexVO})

// 分类下数据
Mock.mock('/categoryL1List', {code:0, categoryL1List: data_nav.categoryL1List})

//返回detail页数据的接口
Mock.mock('/detail', {code:0, detail: shiwu_data})
//返回分类页nav数据
Mock.mock('/nav', {code:0, nav: data_nav})

