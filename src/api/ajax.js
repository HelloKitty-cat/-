import axios from 'axios'

export default function ajax(url,methods='GET',data={}) {
    return new Promise((resolve, reject) => {
      let promise
      if (methods === 'GET'){
        let query = '';
        Object.keys(data).forEach(key => {
          const value = data[key]
          query += `${key}=${value}&`
        })

        if (query !== ''){
          query = query.substring(0,query.length-1)
          url += '?'+query
        }
        promise = axios.get(url)
      } else{
        promise = axios.post(url,data)
      }
      promise
        .then(res => {
          resolve(res.data)
        })
        .catch(err =>{
          reject(err)
        })

    })

}
