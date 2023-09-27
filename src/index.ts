require('dotenv').config();

import {Request, Response} from "express";

const app = require('express')();
const hostname = process.env.HOSTNAME || '127.0.0.1';
const port = process.env.PORT || '3000';

const server = app.get('/', (req: Request, res: Response) => {
	res.send('Hello World');
});

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});