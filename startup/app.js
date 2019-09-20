const express = require('express');
const app = express(); 
const routes = require('../routes');
const allowOrign = require('../middleware/Allow-Origin'); 

module.exports = async () => { 
 
    await app.use(allowOrign);
    await app.use(express.json())  
    await app.use(express.urlencoded({ extended: true }))  
    await routes(app); 
     

    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log( `Server listening on port ${port} !!!`))
}



 