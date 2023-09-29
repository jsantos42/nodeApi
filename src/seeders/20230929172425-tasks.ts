import {QueryInterface, Sequelize} from 'sequelize';
import {faker} from '@faker-js/faker';

export default {
	async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
		const technicianUsers = await queryInterface.sequelize.query(
			'SELECT * FROM Users WHERE role = \'technician\'',
		);

		const technicianUsersIds = technicianUsers[0].map((user: any) => user.id);

		const summary = 'a'.repeat(2500);

		const tasksData = Array.from({length: 10}, (v, index) => ({
			summary: summary,
			performedAt: faker.date.past(),
			technicianId: technicianUsersIds[index],
			createdAt: new Date(),
			updatedAt: new Date()
		}));
		return queryInterface.bulkInsert('Tasks', tasksData);
	},
	async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
		return queryInterface.bulkDelete('Tasks', {}, {});
	}
};
