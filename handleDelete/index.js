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
    let classmateToDelete = await classModel.get(id);
    await classModel.delete(id);
    response.statusCode = 200;
    response.body = JSON.stringify(`${classmateToDelete.name} was successfully deleted`);
  } catch (error) {
    response.statusCode = 500;
    response.body = JSON.stringify(new Error('Could not delete the classmate from the table'));
  }


  return response;
};