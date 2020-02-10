const Sequelize = require("sequelize");
// create the models
const UserCrenSchema ={
    Id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    Email: Sequelize.STRING,
    Password: Sequelize.STRING
    
}

module.exports={
    UserCrenSchema: UserCrenSchema
}
