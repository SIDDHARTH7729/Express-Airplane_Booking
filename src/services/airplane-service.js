const { StatusCodes } = require('http-status-codes');
const { AirplaneRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');

const airplaneRepository = new AirplaneRepository();

function createAirplane(data){
  try {
    const airplane = airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    console.log(error)
    if (error.name === 'SequelizeValidationError') {
            throw new AppError(
                "Validation Error while creating airplane",
                StatusCodes.BAD_REQUEST
            );
        }

        throw new AppError(
            "Failed to create airplane",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
  }
}

module.exports = { createAirplane };