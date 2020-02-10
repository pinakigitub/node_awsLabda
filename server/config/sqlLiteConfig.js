const Sequelize = require("sequelize");
const path = require('path');
let personTableSchema = require("../model/Person");
let stripeUserInfoObj = require("../model/StripeUser");
let userCrenSchema = require("../model/UserCren");
var conn;
(async function() {
    if(!conn) {
        try {
           
            conn = new Sequelize('postgres://kwooncjp:IekM4sNWWFoK20jlYFEIpY8LO7D56E2B@arjuna.db.elephantsql.com:5432/kwooncjp')
            
            console.log("Connected to the database.");
            await conn.sync();
           
        } catch (error) {
            console.log("There was a problem with connection.\n" + error);
        }
    }
})();

// create the models
const Person = conn.define("Employee", personTableSchema.PersonSchema);
const PersonCren = conn.define("UserCren", userCrenSchema.UserCrenSchema);
const StripeUserTable = conn.define("stripeUser", stripeUserInfoObj.StripeUserSchema);
const StripeUserAddressTable = conn.define("stripeUserAddress", stripeUserInfoObj.StripeUserAddressSchema);
const StripeUserShippingAddressTable = conn.define("stripeUserShippingAddress", stripeUserInfoObj.StripeUserShippingAddressSchema);

StripeUserAddressTable.belongsTo(StripeUserTable);
StripeUserShippingAddressTable.belongsTo(StripeUserTable);

module.exports = {
    connection: conn,
    models: {
        personTable: Person,
        PersonCrenTable: PersonCren,
        StripeUserTable:StripeUserTable,
        StripeUserAddressTable:StripeUserAddressTable,
        StripeUserShippingAddressTable:StripeUserShippingAddressTable
    }
}