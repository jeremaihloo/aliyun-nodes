#!/usr/bin/env node
var ping = require('ping')

var hosts = [
  'oss-cn-hangzhou.aliyuncs.com',
  'oss-cn-shanghai.aliyuncs.com',
  'oss-cn-qingdao.aliyuncs.com',
  'oss-cn-beijing.aliyuncs.com',
  'oss-cn-zhangjiakou.aliyuncs.com',
  'oss-cn-huhehaote.aliyuncs.com',
  'oss-cn-shenzhen.aliyuncs.com',
  'oss-cn-hongkong.aliyuncs.com',
  'oss-us-west-1.aliyuncs.com',
  'oss-us-east-1.aliyuncs.com',
  'oss-ap-southeast-1.aliyuncs.com',
  'oss-ap-southeast-2.aliyuncs.com',
  'oss-ap-southeast-3.aliyuncs.com',
  'oss-ap-northeast-1.aliyuncs.com',
  'oss-eu-central-1.aliyuncs.com',
  'oss-me-east-1.aliyuncs.com'
]

// Running ping with some default argument gone
hosts.forEach(function(host) {
  // WARNING: -i 2 argument may not work in other platform like window
  ping.promise
    .probe(host, {
      timeout: false,
      // Below extra arguments may not work in platforms other than linux
      extra: ['-i', '2']
    })
    .then(function(res) {
      console.log(res.output)
    })
    .done()
})
