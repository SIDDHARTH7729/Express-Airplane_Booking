const {StatusCodes} = require('http-status-codes');
const { ErrorResponse,SuccessResponse } = require('../utils/common');
function validateCreateRequest(req,res,next){
    if(!req.body.modelNumber){
        ErrorResponse.message = 'Something went wrong while creating the airplane';
        ErrorResponse.error.explanation = 'modelNumber not found in the airplane incoming request';
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.capacity){
        ErrorResponse.message = 'Something went wrong while creating the airplane';
        ErrorResponse.error.explanation = 'capacity not found in the airplane incoming request';
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest
}