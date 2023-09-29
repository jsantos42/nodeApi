import { DataTypes, Model, Sequelize } from 'sequelize';

interface TechnicianAttributes {
	firstName: string;
	lastName: string;
	email: string;
}

export class Technician extends Model<TechnicianAttributes> {
	public firstName!: string;
	public lastName!: string;
	public email!: string;

	// You can define associations here if needed
	// static associate(models) {
	//   // define association here
	// }
}

export function initTechnician(sequelize: Sequelize) {
	Technician.init(
		{
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			email: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Technician',
		}
	);
}
