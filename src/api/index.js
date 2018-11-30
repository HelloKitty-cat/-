import ajax from './ajax'


//home nav数据
export const reqData = () => ajax('/data')

//home banner数据
export const reqBanner = () => ajax('/banner')
