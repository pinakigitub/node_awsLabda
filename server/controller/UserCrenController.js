let db = require("../config/sqlLiteConfig");
var jwt = require('jsonwebtoken');




exports.getMsg =  function (req, res) {
  var Msg;
 
  var queue = 'hellosecond4';

 
  res.send("Received");

};

exports.getAllUserCren = async function (req, res) {
    let people = await db.models.PersonCrenTable.findAll({
        attributes: { exclude: ['createdAt','updatedAt'] }
      });

    if(people.length == 0) {
        res.send("No record exists in the database right now for Person table.");
    } else {
        res.send(people);
    }
  
};

exports.auntheticate=async function(req,res,next)
{
    let UserObj = await db.models.PersonCrenTable.findAll({
        attributes: { exclude: ['createdAt','updatedAt'] },
       where: {
            Email: req.body.Email
          }
      });
      if (UserObj.length==0) {
        res.json({ success: false, message: 'Authentication failed. User not found.' });
      } 
      else if (UserObj.length>0) {

        // check if password matches
        if (UserObj[0].Password != req.body.Password) {
           
          res.json({ success: false, message: 'Authentication failed. Wrong password.'
        });
        } else {
  
      const payload = {
        admin: true 
      };
          var token = jwt.sign(payload, req.app.get('superSecret'), {
            expiresIn: '24h'
          });
          res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token
          });
        }   
      }
}
exports.isUserAuntheticated=function(req,res,next)
{
   var token = req.body.token || req.query.token || req.headers['x-access-token'];
  
   if(token)
    {
jwt.verify(token, req.app.get('superSecret'), function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;    
        next();
      }
    });
    }
else{
return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });
}
}