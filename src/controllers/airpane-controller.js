const {StatusCodes} = require('http-status-codes');
const { Logger } = require('../config');
const {AirplaneService} = require('../services');
const { ErrorResponse,SuccessResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error'); 


async function createAirplane(req,res){
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity,
        });
        SuccessResponse.data = airplane;
        SuccessResponse.message = 'Airplane created successfully';
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        Logger.error("Something went wrong in the Airplane Controller : createAirplane");
        console.log("ERROR INSTANCE:", error);
        console.log("ERROR TYPE:", error instanceof AppError);
        console.log("ERROR STATUS CODE:", error.statusCode);

        ErrorResponse.message = 'Something went wrong while creating the airplane';
        ErrorResponse.error.explanation = error.message;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createAirplane
}