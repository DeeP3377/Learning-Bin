const math11Data = require('../models/math11Data');
module.exports = async function getSubjectData(req, res) {
    const subjectData= await math11Data.find()
    return res.send(subjectData);
 }