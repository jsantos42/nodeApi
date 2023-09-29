import { QueryInterface, DataTypes, Sequelize } from 'sequelize';

export default {
	async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
		await queryInterface.createTable('Tasks', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			summary: {
				type: DataTypes.STRING,
			},
			performedAt: {
				type: DataTypes.DATE,
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
		await queryInterface.dropTable('Tasks');
	}
};