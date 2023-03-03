const bcrypt = require("bcrypt")

const userRegisterController = function(req, res){
    console.log('register the user');
    const userDetails = req.body
    console.log('Recieved user', userDetails);
    const password = userDetails.password;
    console.log(password);
    const saltRound = 10;
    bcrypt.genSalt(saltRound, function(err, salt){
        if (err){
            console.log(err);
        }
        else{
            bcrypt.hash(password, salt, function(err, hashedPassword){
                if (err){
                    console.log(err);
                }
                else{
                    console.log("User has Registered Successfully");
                    res.send({"hashePassword":hashedPassword})
                }
            })
        }
    })
};
module.exports = {userRegisterController};