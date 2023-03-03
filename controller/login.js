const jwt = require ('jsonwebtoken')
const CONSTANT = require('../config/constant')

const userLoginController = function(req,res){
    console.log('User logging in');
    const loginData = req.body
    console.log(loginData);
if(loginData.username && loginData.password){
    console.log("Received login data ", loginData);
    const jwtToken = jwt.sign(loginData, CONSTANT.SECRET_KEY);
    return res.status(200).send({"token":jwtToken});
}else{
    return res.status(400).send({"message": "Invalid Credentials"})
}
};

module.exports = {userLoginController}