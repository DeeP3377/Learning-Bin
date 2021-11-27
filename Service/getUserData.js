const User = require('../models/userSchema');
module.exports = async function getUserData(req, res) {
    const userData= await User.find()
    return res.send(userData);
 }