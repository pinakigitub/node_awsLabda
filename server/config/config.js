var path = require('path');
var rootPath = '';
module.exports =
    {
        development:
            {
                rootPath: rootPath,
                //db: 'mongodb://127.0.0.1:27017/student',
                //db: 'mongodb://54.67.25.121:27017/IMT_test',
                db: 'mongodb://pinaki:zaq1Xsw2@ds032887.mlab.com:32887/pinakidatabase',
                postgressDB:'postgres://kwooncjp:IekM4sNWWFoK20jlYFEIpY8LO7D56E2B@arjuna.db.elephantsql.com:5432/kwooncjp',
                port: process.env.PORT || 3033,
                'secret': 'ilovescotchyscotch',
            },
        production:
            {
                rootPath: rootPath,
                db: 'mongodb://pinaki:zaq1Xsw2@ds032887.mlab.com:32887/pinakidatabase',
                //db: 'mongodb://54.67.25.121:27017/IMT_test',
                port: process.env.PORT || 80,
                //port: process.env.PORT || 3032,
                'secret': 'ilovescotchyscotch',
            }
    }