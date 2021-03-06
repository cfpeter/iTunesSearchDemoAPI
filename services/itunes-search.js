const axios = require('axios')

module.exports = async () =>{ 

    //could also get this from .env file :)
    const iTunesAPI = 'https://itunes.apple.com/search?';  

    const searchItunes = async (value, limit) => {  
        try {
            let arrayOfResult = {};
            //call itunes api to get data
            const {data} = await axios.post(iTunesAPI + `term=${value}&limit=${limit}`) 

            //loop over the data and create media type
            for(item in data.results){   
                //check if "kind" exists!!!!
                if( data.results[item].kind !== undefined ){   
                    //set a key name to arrayOfResult based on the "kind" if its not been set yet! 
                    if( !arrayOfResult[data.results[item].kind] )
                        arrayOfResult[data.results[item].kind] = []; //append an empty array
                    
                    //get required fields: id, name, artwork, genre, url
                    let {trackId, trackName, artworkUrl100, primaryGenreName, trackViewUrl } = data.results[item]
                    //push fields to the array
                    arrayOfResult[data.results[item].kind].push(
                        {artworkUrl100, trackViewUrl, trackId, trackName, primaryGenreName}
                    )
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
 
