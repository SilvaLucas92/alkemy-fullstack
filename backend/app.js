import express from 'express';
import cors from 'cors';
import db from './config/database.js';
import movementsRoutes from './routes/movementsRoutes.js';
import usersRoutes from './routes/usersRoutes.js'
import homeRoutes from './routes/homeRoutes.js'
import session from 'express-session'

const app = express();

try {
    await db.authenticate();
    console.log('DB connected succesfully!');
} catch (e) {
    console.log('Connection error: ' + e);
}


//Session
app.use(session({
    secret: 'keyboard cat',
    saveUninitialized: true,
    resave: false,
    cookie: {
        httpOnly: true,
        maxAge: 360000
    }
}));

//Cors
app.use(cors())

//req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Home
app.use('/', homeRoutes)

//Movement Routes
app.use('/movements', movementsRoutes);

//Login - Register Routes
app.use('/users', usersRoutes);

//Server
app.listen(3002, () => {
    console.log('Running server on port 3001')
})

