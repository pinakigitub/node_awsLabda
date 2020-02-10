/* eslint-disable no-undef */
let db = require("../config/sqlLiteConfig");



exports.CreateDefaultRecord = async function (req, res) {
    let list = [
        { Name: "Person 1", Location: "Area 1", Department: "Unknown", Salary: 10000 },
        { Name: "Person 2", Location: "Area 2", Department: "Less Known", Salary: 55000 },
        { Name: "Person 3", Location: "Area 3", Department: "Commonly Known", Salary: 50500 },
        { Name: "Person 4", Location: "Area 4", Department: "Reknown", Salary: 90500 }
    ];
    try {
        for (item of list) {
            await db.models.personTable.create(item);
        }

        res.send("created");
    } catch (error) {
        console.log("There was an error saving the person.\n" + error);
        res.send(error);
    }
  
};

exports.getPeople = async function (req, res) {
        var queue = 'hellosecond4';
        var msg = {"dfvd":344};
        
      let people = await db.models.personTable.findAll({
        attributes: { exclude: ['createdAt','updatedAt'] }
      });

    if(people.length == 0) {
        res.send("No record exists in the database right now for Person table.");
    } else {
        var buffer = "";
        var index = 1;
        for (person of people) {
            buffer += `#${index++}: ${person.Name} lives in ${person.Location}.<br />`;
        }
    
        res.send(people);
    }
  
};
exports.addPeople = async function (req, res) {
    var userData = req.body;
    userData.createdAt=new Date();
    userData.updatedAt=new Date();
    await db.models.personTable.create(userData);
    res.send("created");
};
exports.updatePeople = async function (req, res) {
    var userData = req.body;
    userData.updatedAt=new Date();

    await db.models.personTable.update(userData,{ where: {
        Id: userData.Id
      }});
      res.send("updated");
};