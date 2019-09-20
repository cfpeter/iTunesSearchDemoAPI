const axios = require('axios')

module.exports = async () =>{ 

    //could also get this from .env file :)
    const iTunesAPI = 'https://itunes.apple.com/search?';  

    const searchItunes = async (value, limit) => { 
        try {
            let arrayOfResult = {};
            //call api to get data
            const {data} = await axios.post(iTunesAPI + `term=${value}&limit=${limit}`) 
            //loop over the data and create media type
            for(item in data.results){   
                //check if "kind" exists!!!!
                if( data.results[item].kind !== undefined ){   
                    //set a key name to arrayOfResult based on the "kind" if its not been set yet! 
                    if( !arrayOfResult[data.results[item].kind] )
                        arrayOfResult[data.results[item].kind] = []; //append an empty array
                    
                    //push data to the array
                    arrayOfResult[data.results[item].kind].push(data.results[item])
                }
            }
            return arrayOfResult 
        } catch (error) {
            throw error 
        }
    }

    return {
        searchItunes        
    }
}
 
