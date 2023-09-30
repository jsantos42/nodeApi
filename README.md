# nodeApi
Express.js API in TypeScript using a MySQL database and Jest for testing.

## Description
The application has two types of users (Manager, Technician), with separate 
roles and scopes.
The technician performs tasks and is only able to see, create or update his own
performed tasks.
The manager can see tasks from all the technicians and delete them.
A task has a summary (max: 2500 characters) and a date when it was performed, 
the summary from the task can contain personal information.


## Run
1. Startup the containers: `make up-dev`
2. Migrate the database: `docker compose exec api npx sequelize-cli db:migrate`
3. Seed the database: `docker compose exec api npx sequelize-cli db:seed:all`

To stop the app: `make down`

*Check the rest of the commands on the provided [Makefile](Makefile). Note that I added
build commands because Docker tries to reuse cached images, so if running e.g. 
the `dev` one, and then we start the `prod` one, the second one will not work 
unless we rebuild it.*


## Test
`make test`



### TBD:
- Technician creating and updating tasks;
- Create API endpoint to save a new task;
- Notify manager of each task performed by the tech (This notification can be 
just a print saying “The tech X performed the task Y on date Z”, but should not 
block any http request);
- Update the UML diagram.



