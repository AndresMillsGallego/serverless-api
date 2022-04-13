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
  const classmate = {
    name: event.queryStringParameters.name,
    age: event.queryStringParameters.age,
  };

  try {
    let updatedClassmate = await classModel.update(id, classmate);
    response.statusCode = 200;
    response.body = JSON.stringify(updatedClassmate);
  } catch (error) {
    response.statusCode = 500;
    response.body = JSON.stringify(new Error('Could not read from the Class table'));
  }


  return response;
};