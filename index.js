const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const route = require('./app/routes/index');


const app = express();
const port = 3000;

//Set public folder
app.use(express.static(path.join(__dirname, 'public')));



//Template engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))


//Database
// var connection = require('./app/config/database');
// connection.query('SELECT * From users', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].email);
// });
// connection.end();



//Route init
route(app);


//Port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});