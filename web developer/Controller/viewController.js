const User = require('./../models/user');
exports.createuser = async (req, res, next) => {
console.log('bunh');
    const { fname,lname,email,phone,image } = req.body;
    const newUser = await User.create({
      fname: fname,
      lname:lname,
      email: email,
      phone: phone,
      image:image
    });
  
    res.status(200).json({
      status: 'success'
    });
  
  };

exports.getform=function(req,res){ 
    return res.redirect('index.html'); 
}