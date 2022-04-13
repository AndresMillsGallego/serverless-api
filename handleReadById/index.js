'use strict';

// Third Party Libraries.  These have to be downloaded locally first, then zipped and uploaded here.
const dynamoose = require('dynamoose');

const classSchema = new dynamoose.Schema({
  id: String,
  name: String,
  age: String,
});

const classModel = dynamoose.model('Class', classSchema);

exports.handler = async (event) => {
  
  const response = { statusCode: null, body: null };
  const id = event.pathParameters.id;

  try {
    let classResult = await classModel.get(id);
    response.statusCode = 200;
    response.body = JSON.stringify(classResult);
  } catch (error) {
    response.statusCode = 500;
    response.body = JSON.stringify(new Error('Could not read from the Class table'));
  }


  return response;
};