/* eslint-disable no-undef */

let db = require("../config/sqlLiteConfig");
const stripe = require("stripe")("sk_test_vH6FTlO948W1OK26fATo9sHQ00ePAdj1jh");


exports.testServer = function (req, res) {
    res.send("Server Working...");
};


exports.ValidateCustomer = async function (req, res) {
   try{
    let ef=req.body;
    let UserObj = await db.models.StripeUserTable.findAll({
        attributes: { exclude: ['createdAt','updatedAt'] },
       where: {
        email: req.body.email
          }
      });
      if (UserObj.length==0) {
        res.json({ success: false, message: 'Authentication failed. User not found.' });
      } 
      else {
  
        const payload = {
          admin: true 
        };
            
            res.json({
              success: true,
              message: 'Enjoy your token!',
              
            });
          }

   } catch (err) {
    console.log(err);
    res.status(500).end();
  }
}
exports.createCustomer = async function (req, res) {
    try {
        let ef=req.body;
       let  UserObj=req.body;
        
        console.log(ef);
        let shaddress={
          name:req.body.name,
          address:{
            line1: '510 Townsend St',
          postal_code: '98140',
          city: 'San Francisco',
          state: 'CA',
          country: 'US',
          },
        };
        let UserShippingObj=shaddress.address;
        let UserAddressObj=shaddress.address;
    let asda=await stripe.customers.create(
      {
        email: req.body.email,
        address:shaddress.address,
        shipping:shaddress,
        name:req.body.name,
        
    
      }
    );
    console.log("created");
   
 
    
    UserObj.stripe_custId= asda.id;
        let ad=  await db.models.StripeUserTable.create(UserObj);
      
        UserShippingObj.stripe_custId=asda.id;
        UserShippingObj.stripeUserId=ad.dataValues.Id;
   
        UserAddressObj.stripe_custId=asda.id
        UserAddressObj.stripeUserId=ad.dataValues.Id;
        
        await db.models.StripeUserShippingAddressTable.create(UserShippingObj);
        await db.models.StripeUserAddressTable.create(UserAddressObj);
  
        res.send({'customer':asda});
       
      
      } catch (err) {
        console.log(err);
        res.status(500).end();
      }
}

// select column_name, data_type, character_maximum_length
// from INFORMATION_SCHEMA.COLUMNS where table_name ='stripeUserAddresses';
exports.CreateDefaultRecordForStripe = async function (req, res) {
    let UserObj={
        Name: "Person 1", Email: "EmailTestg", MobileNo: 90656, Amount: 10000, Stripe_custId: "fdhj", 
        PlanType: "Gold",Coupon:"Test",IsPaymentodMethodeAdded:false
    }
    let UserShippingObj={
        Line1: "Person 1", Postal_code: "EmailTestg", Stripe_custId: "fdjj", 
        City: "Gold",State:"Test",StripeUserId:1
    }
    let UserAddressObj={
        Line1: "Person 1", Postal_code: "EmailTestg", Stripe_custId: "fdjj", 
        City: "Gold",State:"Test",StripeUserId:1
    }
    try {
      let ad=  await db.models.StripeUserTable.create(UserObj);
      console.log("created");
      console.log(ad.dataValues);
      UserShippingObj.stripeUserId=ad.dataValues.Id;
      UserAddressObj.stripeUserId=ad.dataValues.Id;
      await db.models.StripeUserShippingAddressTable.create(UserShippingObj);
      await db.models.StripeUserAddressTable.create(UserAddressObj);

        res.send("created");
    } catch (error) {
        console.log("There was an error saving the person.\n" + error);
        res.send(error);
    }
  
};