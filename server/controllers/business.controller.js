const { Business} = require("../models/business.model")

// CRUD Operations for business Document

// Get All businesses: READ
module.exports.findAllBusinesses = (request, response) => {
    Business.find()
        .then(allBusinesses => response.json({Businesses: allBusinesses}))
        .catch(err => response.json({ message: "Something went wrong", error: err}))
};

// Get a Single Business: READ
module.exports.findOneSingleBusiness = (request, response) => {
    Business.find({_id: request.params.id})
        .then(oneSingleBusiness => response.json({ Business: oneSingleBusiness}))
        .catch(err => response.json({ message: "Something went wrong", error: err}));
};

// Create a Business: CREATE
module.exports.createBusiness = (request, response) => {
    const {nameOfFirm, tradeName, category, owner, address, city, state, zipCode, description} = request.body;
    Business.create({
        nameOfFirm,
        tradeName,
        category,
        owner,
        address,
        city,
        state,
        zipCode,
        description
    })
        .then(Business => response.json(Business))
        .catch(err => response.status(400).json(err))
};

// Update a Business: UPDATE
module.exports.updateBusiness = (request, response) => {
    Business.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedBusiness => response.json(updatedBusiness))
        .catch(error => response.status(400).json(error))
}

// Delete a Business: DELETE
module.exports.deleteBusiness = (request, response) => {
    Business.deleteOne({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(error => response.json(error))
}
