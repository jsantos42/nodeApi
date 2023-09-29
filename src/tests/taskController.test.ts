import request from 'supertest';
import app from '../app';
import {Task} from "../models/task";
import {User} from "../models/user";
import {faker} from "@faker-js/faker";

interface UserWithId extends User {
	id: number;
}

interface TaskWithId extends Task {
	id: number;
}

describe('Task Controller', () => {
	let managerUser: User;
	let technicianUser: User;
	let task: Task;

	beforeEach(async () => {
		managerUser = await User.create({
			role: 'manager',
			firstName: faker.person.firstName(),
			lastName: faker.person.lastName(),
			email: faker.internet.email(),
		});

		technicianUser = await User.create({
			role: 'technician',
			firstName: faker.person.firstName(),
			lastName: faker.person.lastName(),
			email: faker.internet.email(),
		});

		task = await Task.create({
			summary: 'a'.repeat(250),
			performedAt: faker.date.past()
		});
	});

	it('should delete a task if user is a manager', async () => {
		let userId = (managerUser as UserWithId).id;
		let taskId = (task as TaskWithId).id;

		const response = await request(app)
			.post(`/users/${userId}/tasks/${taskId}/delete`)

		expect(response.status).toBe(200);

	});

	it('should not delete a task if user is a technician', async () => {
		let userId = (technicianUser as UserWithId).id;
		let taskId = (task as TaskWithId).id;

		const response = await request(app)
			.post(`/users/${userId}/tasks/${taskId}/delete`)

		expect(response.status).toBe(403);
	});
});
