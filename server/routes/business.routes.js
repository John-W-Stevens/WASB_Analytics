const BusinessController = require("../controllers/business.controller");

module.exports = function(app){
    app.get("/api/businesses", BusinessController.findAllBusinesses);
    app.post("/api/business", BusinessController.createBusiness);
    app.get("/api/business/:id", BusinessController.findOneSingleBusiness);
    app.put("/api/business/:id", BusinessController.updateBusiness);
    app.delete("/api/business/:id", BusinessController.deleteBusiness);
}
