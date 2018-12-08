const proxy = require('http-proxy-middleware');// vue反向代理

module.exports = function(app) {
  app.use(proxy('/API', { 
    	target:'http://www.cndesign.com',
    	host:"www.cndesign.com", 
    	changeOrigin:true 
  }));
   app.use(proxy('/Api', { 
    	target:'http://www.cndesign.com',
    	host:"www.cndesign.com", 
    	changeOrigin:true 
  }));
// http://www.cndesign.com/Api/Base/SliderBannel

 };





// get-api.js
// import React,{Component} from 'react'
// import axios from 'axios'
// const host = 'http://localhost:3100/'

// const getNewList=()=>{
//     return axios.get(host+"selfJson/news.json")
//         .then( (response)=> response.data.data)
//         .catch(function (error) {
//             console.log(error);
//         })
// }

// export {getNewList};
