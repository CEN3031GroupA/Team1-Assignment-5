//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
    db: {
        uri: 'mongodb://ayemess:aims1013@ds117109.mlab.com:17109/ufdirectory' //place the URI of your mongo database here.
    },
    googleMaps: {
        key: 'AIzaSyCns6-TdJOTJPKqNH_9YwxuyE3oukpwmTY'
    },
    port: 8080
};