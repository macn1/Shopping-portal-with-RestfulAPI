
# Shopping Portal Project with RESTful API


This project aims to develop a simple shopping portal with RESTful API using Node.js and Express. The API enables basic CRUD (Create, Read, Update, Delete) operations for managing tasks. Each task consists of a title, description, status, and timestamps for creation and last update.




## installation


1.clone the repository 

git clone https://github.com/macn1/Shopping-portal-with-RestfulAPI.git

2.install dependencies:

npm install

## usage

1.start the server

npm start

## API Endpoints

1.Acces the Api using a tool like postman or cUrl






## Get all items

```http
  GET /api/tasks
```
### method : Get

#### request body : 
{
  "title": "Task Title",
  "description": "Task Description",
  "status": "pending"
}

#### response
Success: 200 
Error: 400 Bad Request



## Create an item

```http
  POST /api/tasks
```
### method : Post

#### request body : 
{
  "title": "Task Title",
  "description": "Task Description",
  "status": "pending"
}


#### response
Success: 201 Created
Error: 400 Bad Request

## Update  an item

```http
  PUT /api/tasks/:id
```
### method : Put

#### request body : 
{
  "title": "Updated Task Title",
  "description": "Updated Task Description",
  "status": "completed"
}



#### response
Success: 204 ok
Error: 400 Bad Request

## Delete item

```http
  Delete /api/tasks/:id
```
### method : delete





#### response
Success: 204 no content
Error: 404 Not found




## Contributor

- Athul mk

## License

-This project is licensed under the MIT License

