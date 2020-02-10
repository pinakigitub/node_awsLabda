

var userController = require('../controller/userController');
var employeeController = require('../controller/EmployeeController');
var userCrenController = require('../controller/UserCrenController');


module.exports = function (app, dir) {
    
    
    app.get('/', userController.testServer);
    app.get( '/CreateDefaultRecordForStripe', userController.CreateDefaultRecordForStripe);
    app.post( '/createCustomer', userController.createCustomer);
    app.post( '/ValidateCustomer', userController.ValidateCustomer);
   // app.get( '/users', userController.getAllUsers);
    app.get( '/CreateDefaultRecord', employeeController.CreateDefaultRecord);
    app.get( '/getPeople', employeeController.getPeople);
    app.post( '/addPeople', employeeController.addPeople);
    app.post( '/updatePeople', userCrenController.isUserAuntheticated,employeeController.updatePeople);

    app.get( '/getAllUserCren', userCrenController.getAllUserCren);
    app.get( '/getMsg', userCrenController.getMsg);
    app.post( '/auntheticate', userCrenController.auntheticate);
    
}
