const express = require("express");
const router = new express.Router();
//const Math11Data = require("../models/math11Data");
const getSubjectData= require('../Service/getSubjectData')
    router.get('/studymaterial/contentpage' ,getSubjectData );
module.exports = router;