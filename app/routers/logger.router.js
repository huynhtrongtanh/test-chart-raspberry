module.exports = router = function(router){
    var logger = require('../controllers/logger.controller');

    router.get("/api/logger/all",  logger.all);

    router.get("/api/logger/get/:limit",  logger.getLimit);
    
};