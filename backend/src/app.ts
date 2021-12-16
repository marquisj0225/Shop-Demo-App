import express, {Request, Response, NextFunction} from 'express';
import cors from 'cors';
import Knex from 'knex';
import {Model} from 'objection';
import createError from 'http-errors';
import knexConfig from './knexfile';
import router from './routes';


/**
 * Initialize knex.
 * Bind all Models to a knex instance. If you only have one database in,
 * your server this is all you have to do. For multi database systems, see
 * the Model.bindKnex() method.
 **/
const knex = Knex(knexConfig[process.env.NODE_ENV || 'development']);
Model.knex(knex);


/**
 * Initialize application
 */
const app = express();

app.use(cors({origin: '*', allowedHeaders: 'Content-Type,Authorization,Accept,OPP-CONTAINS-FILE', credentials: true}));
app.use(express.json());
app.use('/v1', router);

app.set('port', process.env.PORT || 8000);


// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
    next(createError(404));
});

// error handler
app.use((err, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500);
    res.json({error_code: err.status, message: err.message});
});


export default app;