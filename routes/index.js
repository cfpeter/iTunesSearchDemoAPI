const search = require('./search'); 


module.exports = async function (app) {  
    await app.use('/api/search' , search); 
} 
