const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

const port = process.env.PORT || 8080;

var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-ro0qsq4z.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'http://localhost:8100',
  issuer: 'https://dev-ro0qsq4z.us.auth0.com/',
  algorithms: ['RS256']
});

app.use(jwtCheck);

app.get('/authorized', function (req, res) {
  res.send('Secured Resource');
});

const app = express();

const SELECT_ALL_UNITS_QUERY = 'SELECT * From Units';
const SELECT_UNIT_BEDS_QUERY = 'SELECT * From Units ORDER BY Bedrooms';
const SELECT_BASEMENT_UNIT_QUERY = 'SELECT * From Units ORDER BY Basement';

const SELECT_ALL_BUILDINGS_QUERY = 'SELECT * From Building';
const SELECT_BUILDING_ON_OFF_CAMPUS_QUERY = 'SELECT * From Building ORDER BY On_Off_Campus';

const SELECT_ALL_EMPLOYEES_QUERY = 'SELECT * From Employee';

const SELECT_ALL_MAINTENANCE_QUERY = 'SELECT * From Maintenance';

const SELECT_ALL_TENANT_QUERY = 'SELECT * From Tenant';

const SELECT_ALL_ORGANIZATION_QUERY = 'SELECT * From Organization';



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
    res.send('go to /Units to see units, go to /Building to see buildings, go to /Employee to see employees || Use /add to add ')
});

app.get('/Units/add', (req, res) => {
    const {Unit_ID, Laundry, Utilities, Bedrooms, Unit_Name, Den, In_Unit_WasherDryer, LED_Lighting, Basement, NSPI_Meter, Monthly_Rent} = req.query;
    const INSERT_UNITS_QUERY = `INSERT INTO Units (Unit_ID, Laundry, Utilities, Bedrooms, Unit_Name, Den, In_Unit_WasherDryer, LED_Lighting, Basement, NSPI_Meter, Monthly_Rent) VALUES('${Unit_ID}', ${Laundry}, ${Utilities}, ${Bedrooms}, ${Unit_Name}, ${Den}, ${In_Unit_WasherDryer}, ${LED_Lighting}, ${Basement}, ${NSPI_Meter}, ${Monthly_Rent})`
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
    const {Employee_ID, Name, Phone_Num, Address, Maintenance_Job_ID} = req.query;
    const INSERT_EMPLOYEES_QUERY = `INSERT INTO Employee (Employee_ID, Name, Phone_Num, Address, Maintenance_Job_ID) VALUES('${Employee_ID}', ${Name}, ${Phone_Num}, ${Address}, ${Maintenance_Job_ID})`
    connection.query(INSERT_EMPLOYEES_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.send("Succesfully added new Employee")
        } 
    });
});

app.get('/Building/add', (req, res) => {
    const {Building_ID, Address, Rent_Cost, Units_Unit_ID, Tenant_Tenant_ID, Postal_Code, Parking, Snow_Clearing, Purchases_Inv, Heating_Source, Coin_Op_Washer, Market_Value, Appraisal_Date, Purchase_Price, On_Off_Campus} = req.query;
    const INSERT_BUILDINGS_QUERY = `INSERT INTO Building (Building_ID, Address, Rent_Cost, Units_Unit_ID, Tenant_Tenant_ID, Postal_Code, Parking, Snow_Clearing, Purchases_Inv, Heating_Source, Coin_Op_Washer, Market_Value, Appraisal_Date, Purchase_Price, On_Off_Campus) VALUES('${Building_ID}', ${Address}, ${Rent_Cost}, ${ Units_Unit_ID}, ${Tenant_Tenant_ID}, ${Postal_Code}, ${Parking}, ${Snow_Clearing}, ${Purchases_Inv}, ${Heating_Source}, ${Coin_Op_Washer}, ${Market_Value}, ${Appraisal_Date}, ${Purchase_Price}, ${On_Off_Campus})`
    connection.query(INSERT_BUILDINGS_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.send("Succesfully added new Building")
        } 
    });
});

app.get('/Maintenance/add', (req, res) => {
    const {Job_ID, Job_Type, Priority, Date, Building_Address, Employee, Unit_ID} = req.query;
    const INSERT_MAINTENANCE_QUERY = `INSERT INTO Maintenance (Job_ID, Job_Type, Priority, Date, Building_Address, Employee, Unit_ID) VALUES('${Job_ID}', ${Job_Type}, ${Priority}, ${Date}, ${Building_Address}, ${Employee}, ${Unit_ID})`
    connection.query(INSERT_MAINTENANCE_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.send("Succesfully added new Maintenance")
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

app.get('/Units/Bedrooms', (req, res) => {
    connection.query(SELECT_UNIT_BEDS_QUERY, (err, results) => {
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

app.get('/Units/Basement', (req, res) => {
    connection.query(SELECT_BASEMENT_UNIT_QUERY, (err, results) => {
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

app.get('/Building/On_Off_Campus', (req, res) =>{
    connection.query(SELECT_BUILDING_ON_OFF_CAMPUS_QUERY, (err, results) =>{
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

app.get('/Maintenenace', (req, res) => {
    connection.query(SELECT_ALL_MAINTENANCE_QUERY, (err, results) =>{
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
app.listen(port);

app.listen(3000, () => {
    console.log(`UNITS server listening on port 3000`)
    console.log(`BUILDINGS server listening on port 3000`)
    console.log(`EMPLOYEES server listening on port 3000`)
    console.log(`MAINTENANCE server listening on port 3000`)
});
