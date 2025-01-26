const path = require('path');
require('dotenv').config();

const config = {
  'root': path.join(),
  'viws': path.join(),
  'controllers': path.join(),
  'sqlcon': {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    charset: 'utf8mb4'
  },
  'populateCon': {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    charset: 'utf8mb4',
    multipleStatements: true
  }
}

module.exports = config;