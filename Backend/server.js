const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const e = require('express');

const app = express();

const SELECT_ALL_UNITS_QUERY = 'SELECT * From Units';
const SELECT_ALL_BUILDINGS_QUERY = 'SELECT * From Building';
const SELECT_ALL_EMPLOYEES_QUERY = 'SELECT * From Employee';

const connection = mysql.createConnection({
    host: 'pejk-1.cmjsajum1a1j.us-east-2.rds.amazonaws.com',
    user: 'PEJK',
    password: 'MaxCarlServer*',
    database: 'PEJK_1'
});

connection.connect(err => {
    if(err){
        return err;
    }
});

app.use(cors());

app.get('/', (req, res) => {
    res.send('go to /Units to see units, go to /Building to see buildings, go to /Employee to see employees')
});

app.get('/Units/add', (req, res) => {
    const {Unit_ID, Laundry, Utilities, Bedrooms, Unit_Name, Den, In_Unit_WasherDryer, LED_Lighting, Basement, NSPI_Meter} = req.query;
    const INSERT_UNITS_QUERY = `INSERT INTO Units (Unit_ID, Laundry, Utilities, Bedrooms, Unit_Name, Den, In_Unit_WasherDryer, LED_Lighting, Basement, NSPI_Meter) VALUES('${Unit_ID}', ${Laundry}, ${Utilities}, ${Bedrooms}, ${Unit_Name}, ${Den}, ${In_Unit_WasherDryer}, ${LED_Lighting}, ${Basement}, ${NSPI_Meter})`
    connection.query(INSERT_UNITS_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.send("Succesfully added new Unit")
        }
    });
});

app.get('/Employee/add', (req, res) => {
    const {Employee_ID, Name, Phone_Num, Address, Username, Password, Maitenance_Job_ID} = req.query;
    const INSERT_EMPLOYEES_QUERY = `INSERT INTO Employee (Employee_ID, Name, Phone_Num, Address, Username, Password, Maitenance_Job_ID) VALUES('${Employee_ID}', ${Name}, ${Phone_Num}, ${Address}, ${Username}, ${Password}, ${Maitenance_Job_ID})`
    connection.query(INSERT_EMPLOYEES_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.send("Succesfully added new Employee")
        } 
    });
});

app.get('/Units', (req, res) => {
    connection.query(SELECT_ALL_UNITS_QUERY, (err, results) => {
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                data: results
            })
        }
    });
});

app.get('/Building', (req, res) =>{
    connection.query(SELECT_ALL_BUILDINGS_QUERY, (err, results) =>{
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                data: results
            })
        }
    })
})

app.get('/Employee', (req, res) => {
    connection.query(SELECT_ALL_EMPLOYEES_QUERY, (err, results) =>{
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                data: results
            })
        }
    })
})

app.listen(3000, () => {
    console.log(`UNITS server listening on port 3000`)
    console.log(`BUILDINGS server listening on port 3000`)
    console.log(`EMPLOYEES server listening on port 3000`)
});
