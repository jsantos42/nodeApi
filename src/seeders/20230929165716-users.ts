import {QueryInterface, Sequelize} from 'sequelize';
import {faker} from '@faker-js/faker';

export default {
	async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
		const usersData = Array.from({length: 20}, () => ({
			role: faker.helpers.arrayElement(['technician', 'manager']),
			firstName: faker.person.firstName(),
			lastName: faker.person.lastName(),
			email: faker.internet.email(),
			createdAt: new Date(),
			updatedAt: new Date()
		}));
		return queryInterface.bulkInsert('Users', usersData);
	},
	async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
		return queryInterface.bulkDelete('Users', {}, {});
	}
};
