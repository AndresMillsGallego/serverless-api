# Serverless-Api

  **Authors:  Andres Mills Gallego &  Tanner Percival**

![UML](./Whiteboard%20(3).png)

- What is the root URL to your API?
  - [API URL](https://7t0cfyw8y0.execute-api.us-west-2.amazonaws.com/Production)

- What are the routes?
  - `GET` - /class - Gets all classmates from the Class Table
  - `GET` - /class/id - Gets one classmate from the Class Table by id
  - `POST` - /class - Creates a new classmate and adds them to the Class Table
  - `PUT` - /class/id - Finds a classmate by their id and updates the information in the Class Table
  - `DELETE` - /class/id - Finds and deletes a classmate from the Class Table and returns a "success" message with the classmate's name

- What inputs do they require?
  - They required the `event.pathParameters` and the `event.queryStringParameters`

- What output do they return?
  - They return the item from the table, be it the entire list with `GET`, a single item with `GET` by id, the updated item with `PUT` and a "classmate.name was successfully deleted!" message with `DELETE`

  ## Pull Requests

  [Lab 18 Pull Request](https://github.com/AndresMillsGallego/serverless-api/pull/1)