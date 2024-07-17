const express = require('express')
const app = express();
const morgan = require('morgan');
const user = require('./routers/user');
const student = require('./routers/student');

// app.use(log);
app.use(express.json());

// console.log(app.get('env'));
if(app.get('env') === 'development'){
  app.use(morgan('dev'));
}

app.use('/api/users',log,user);
app.use('/api/student',student);

function log(req, res, next) {
  console.log("Hello world");
  req.id = "10";
  next();
}

morgan('tiny');

const port = process.env.PORT || 3000;

app.listen(port,()=>console.log(`App is listening on ${port}`));