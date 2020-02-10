
const Sequelize = require("sequelize");
// create the models
const StripeUserSchema ={
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: Sequelize.STRING,
    password: Sequelize.STRING,
    email: Sequelize.STRING,
    amount: Sequelize.INTEGER,
    mobileNo: { type: Sequelize.INTEGER,  unique: true },
    stripe_custId: Sequelize.STRING,
    planType: Sequelize.STRING,
    coupon:Sequelize.STRING,
    isPaymentodMethodeAdded:Sequelize.BOOLEAN
}
const StripeUserAddressSchema ={
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    line1: Sequelize.STRING,
    postal_code: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    country: Sequelize.STRING,
    stripe_custId: { type: Sequelize.STRING,  unique: true }
}
const StripeUserShippingAddressSchema ={
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    line1: Sequelize.STRING,
    postal_code: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    country: Sequelize.STRING,
    stripe_custId: { type: Sequelize.STRING,  unique: true }
}
module.exports={
    StripeUserSchema: StripeUserSchema,
    StripeUserAddressSchema: StripeUserAddressSchema,
    StripeUserShippingAddressSchema: StripeUserShippingAddressSchema
}

