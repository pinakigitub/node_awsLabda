const Sequelize = require("sequelize");
// create the models
const PersonSchema ={
    Id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    Name: Sequelize.STRING,
    Location: Sequelize.STRING,
    Department: Sequelize.STRING,
    Salary: Sequelize.INTEGER
}

module.exports={
    PersonSchema: PersonSchema
}
