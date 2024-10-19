const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

//GET method 
app.get('/', function(req, res){
    res.send('Hello Dear! Welcome to our best LA hotel!')
})


// import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');
// use the routes
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);


// // POST Method to add meunu items
// app.post('/menu', async(req,res) =>{
//     try{
//         const data = req.body
//         const newMenu = new MenuItem(data);
//         const response = await newMenu.save();
//         console.log('data saved');
//         res.status(200).json(response);
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error: 'Internal Server Error'});
//     }
// })



// // GET method to get the Menu Items
// app.get('/menu', async(req,res)=>{
//     try{
//         const data = await MenuItem.find();
//         console.log('data fetched');
//         res.status(200).json(data);
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error: 'Internal Server Error'});
//     }
// })


// The person post or get method is now in personRoutes folder

// // POST method to add a person
// app.post('/person', (req,res)=>{



//     const data = req.body //Assuming the request body contains the person's data

//     // Create a new Person document using the Mongoose model
//     const newPerson = new Person(data);

//     // Save the new person to the database but 
//     // this callback functions like we used in POST methods are not used nowadays
//     // They look quite complex and also do not give us code readability.
    

//     // Async and await are features in Javascript, that make it easier to work with 
//     // assynchronous code, such as network requests, file system operations or database queries.

//     newPerson.save((error, person)=>{
//         if(error){
//             console.log('Error saving person: ', error);
//             res.status(500).json({error: 'Internal server error'});
//         }
//         else{
//             console.log('data saved successfully');
//             res.status(200).json(savedPerson);
//         }
//     })
    


// })
// // POST method to add a person
// using async and await
// app.post('/person', async(req, res)=>{
//     try{
//         const data = req.body  //Assuming the request body contains the person data

//         // Create a new Person document using the Mongoose model
//         const newPerson = new Person(data);

//         // Save the new person to the database
//         const response = await newPerson.save();
//         console.log('data saved');
//         res.status(200).json(response);
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error: 'Internal Server Error'});
//     }
// })

// // GET method to get the person
// app.get('/person', async (req,res)=>{
//     try{
//         const data = await Person.find();
//         console.log('data fetched');
//         res.status(500).json(data);
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error: 'Internal Server Error'});
//     }
// })

// app.get('/person/:workType', async(req,res)=>{
//     try{
//         const workType = req.params.workType; //Extract the worktype from the URL parameter
//     if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
//         const response = await Person.find({work: workType});
//         console.log('response fetched');
//         res.status(200).json(response);
//     }
//     else{
//         res.status(404).json({error: 'Invalid workType'});
//     }
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error:'Internal Server Error'});
//     }
// })


app.listen(3000,()=>{
    console.log('listening on port 3000');
})