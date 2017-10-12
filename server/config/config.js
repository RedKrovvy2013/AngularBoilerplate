const fs = require('fs')
const path = require('path')

const {isClientOnly} = require('./../util/util')

if (isClientOnly()) {

    process.env.PORT = process.env.PORT || 3001

} else {

    var config = require('./config.json')
    var envConfig = config[process.argv[2]]

    Object.keys(envConfig).forEach((key) => {
        process.env[key] = envConfig[key]
    })

}
