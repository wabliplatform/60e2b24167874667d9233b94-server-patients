/**
 * The PatientController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/PatientService');
const createpatient = async (request, response) => {
  await Controller.handleRequest(request, response, service.createpatient);
};

const deletepatient = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletepatient);
};

const getAllpatient = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllpatient);
};

const getpatient = async (request, response) => {
  await Controller.handleRequest(request, response, service.getpatient);
};

const updatepatient = async (request, response) => {
  await Controller.handleRequest(request, response, service.updatepatient);
};


module.exports = {
  createpatient,
  deletepatient,
  getAllpatient,
  getpatient,
  updatepatient,
};
