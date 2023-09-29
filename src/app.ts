import {NextFunction, Request, Response} from "express";
import createHttpError, {HttpError} from "http-errors";
import path from "path";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import express from "express";
import router from "./routes/api";
import dotenv from "dotenv";
import {Sequelize} from "sequelize";

// Load environment variables from a .env file into process.env
dotenv.config();

const port = process.env.PORT || '3000';

const app = express();

// Set the views directory for the application, and jade as the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Mount the router module on the app
app.use('/', router);

// Set the directory from which to serve static files
app.use(express.static(path.join(__dirname, 'public')));


//==============================================================================
// MIDDLEWARE SETUP
//==============================================================================
// Log HTTP requests in dev mode
app.use(morgan('dev'));

// Parse incoming requests with JSON payloads
app.use(express.json());

// Parse incoming requests with urlencoded payloads
app.use(express.urlencoded({ extended: false }));

// Parse Cookies' headers and populate req.cookies with an object keyed by the cookie names
app.use(cookieParser());

// Catch 404 errors and forward them to error handlers
app.use(function(req: Request, res: Response, next: NextFunction) {
	next(createHttpError(404));
});

// Handle errors
app.use(function(err: HttpError, req: Request, res: Response, next: NextFunction) {
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	res.status(err.status || 500);
	res.render('error');
})

//==============================================================================
// DB SETUP
//==============================================================================
const sequelize = new Sequelize(
	process.env.MYSQL_DATABASE || 'database',
	process.env.MYSQL_USER || 'user',
	process.env.MYSQL_PASSWORD || 'password',
	{
		host: 'db',
		dialect: 'mysql'
	});

(async function test() {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}

})();


app.listen(port, () => {
	console.log(`Server running at localhost:${port}/`);
});

export default app;
