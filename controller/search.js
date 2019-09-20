const itunesSearchService = require('../services/itunes-search') 

const search = async (req, res, next) => { 
    try { 
        const service = await itunesSearchService();  
        const {searchVal, limit} = req.body; 
        const result = await service.searchItunes(searchVal, limit); 
        res.status(200).json(result)
    } catch (error) {
        res.status(500);
        throw error
    }
} 

module.exports = {
    search
}
