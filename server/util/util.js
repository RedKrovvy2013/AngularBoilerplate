const fs = require('fs')
const path = require('path')

var isClientOnly = function() {
    if (fs.existsSync(__dirname + '/../config/config.json'))
        return false
    else
        return true
}

module.exports = { isClientOnly }