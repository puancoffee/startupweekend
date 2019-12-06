var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const multer = require('multer')
const cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const productRouter = require('./routes/products')
const voteRouter = require('./routes/total')

var app = express();
mongoose.connect('mongodb://kenbro:224566Lc@ds353338.mlab.com:53338/startupweekend', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/images/');
    },
    filename: (req, file, cb) => {
      cb(null, new Date().toISOString() + file.originalname);
    }
  });
  
  
  const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
  });
  
  
  
  app.use(cors());
  app.use(
    cors({
      origin: ["*"],
      methods: ["GET", "HEAD", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"],
      credentials: false
    })
  );

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static('public'))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', voteRouter)
app.use('/api', upload.single('images'), productRouter)
module.exports = app;
