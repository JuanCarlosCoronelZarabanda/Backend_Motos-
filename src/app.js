const express = require('express');
const usersRouter = require('./users/users.route')
const repairsRouter = require('./repairs/repairs.route')
const app = express();

const calculateRequestTime = (req, res, next) => {
  const requestTime = new Date().toISOString();

  req.requestTime = requestTime;
  next()
}

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(calculateRequestTime)

app.use('/api/v1', usersRouter) //http://localhost:3000/api/v1/users
app.use('/api/v1', repairsRouter) //http://localhost:3000/api/v1/repairs

module.exports = app;