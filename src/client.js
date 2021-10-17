// Il vaut mieux utiliser un système de pool pour traiter plusieurs requête en même
const { Pool } = require('pg');

const pool = new Pool({ 
   /* user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST*/
    user: 'virgile',
    password: 'virgile',
    database: 'ecommerce',
    host: 'localhost'
 });

 console.log(process.env.DB_DATABASE);

// Pas besoin de connect car c'est le Pool qui va se charger d'établir les connexions

module.exports = pool;