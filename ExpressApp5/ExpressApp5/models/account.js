﻿var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AccountSchema = new mongoose.Schema(
    {
        username: String,
        password: String
    }
);

module.exports = mongoose.model('Account', AccountSchema);