import { QueryInterface, DataTypes, Sequelize } from 'sequelize';

export default {
	async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
		await queryInterface.createTable('Users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			role: {
				type: DataTypes.STRING,
			},
			firstName: {
				type: DataTypes.STRING,
			},
			lastName: {
				type: DataTypes.STRING,
			},
			email: {
				type: DataTypes.STRING,
			},
			createdAt: {
				allowNull: false,
				type: DataTypes.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: DataTypes.DATE,
			},
		});
	},
	async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
		await queryInterface.dropTable('Users');
	},
};
