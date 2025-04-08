import express from 'express';
import bodyParser from 'body-parser'; // Import body-parser query
import initWebRoute from './router/web.js'; // Import web routes
import viewEngine from './config/viewEngine.js'; 
import connectDb from './config/connectDb.js';
require('dotenv').config();
let app = express(); // Create an Express application


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
initWebRoute(app); 
viewEngine(app); 
 
connectDb();

let port = process.env.PORT || 8080; 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`); 
}); 
export default app; 