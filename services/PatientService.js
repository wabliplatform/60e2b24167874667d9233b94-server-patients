/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Patient } = require('../models/Patient');

/**
* Creates the data
*
* patient Patient data to be created
* returns patient
* */
const createpatient = ({ patient }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Patient(patient).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* patientId String the Id parameter
* no response value expected for this operation
* */
const deletepatient = ({ patientId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Patient.findOneAndDelete({ _id:patientId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllpatient = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Patient.find().exec();
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* patientId String the Id parameter
* returns patient
* */
const getpatient = ({ patientId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Patient.findById(patientId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* patientId String the Id parameter
* patient Patient data to be updated (optional)
* returns patient
* */
const updatepatient = ({ patientId, patient }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Patient.findOneAndUpdate({ _id:patientId },patient).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createpatient,
  deletepatient,
  getAllpatient,
  getpatient,
  updatepatient,
};
