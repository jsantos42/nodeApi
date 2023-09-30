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
`make up-dev-build`

To stop the app: `make down`

*Check the rest of the commands on the provided [Makefile](Makefile). Note that 
I added build commands because Docker tries to reuse cached images, so if 
running e.g. the `dev` one, and then we start the `prod` one, the second one 
will not work unless we rebuild it.*


## Test
`make test`



### TBD:
- Technician creating and updating tasks;
- Create API endpoint to save a new task;
- Notify manager of each task performed by the tech (This notification can be 
just a print saying “The tech X performed the task Y on date Z”, but should not 
block any http request);
- Update the UML diagram.
- Go back to multi-stage building in Dockerfile
- Fix issue that is making tests to fail: `A worker process has failed to exit 
gracefully and has been force exited. This is likely caused by tests leaking due
to improper teardown. Try running with --detectOpenHandles to find leaks. Active
timers can also cause this, ensure that .unref() was called on them.`
