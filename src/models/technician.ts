import { DataTypes, Model, Sequelize } from 'sequelize';

interface TechnicianAttributes {
	firstName: string;
	lastName: string;
	email: string;
}

export class Technician extends Model<TechnicianAttributes> {
	#firstName!: string;
	#lastName!: string;
	#email!: string;

	constructor(attributes?: TechnicianAttributes, options?: any) {
		super(attributes, options);
		this.#firstName = attributes?.firstName ?? '';
		this.#lastName = attributes?.lastName ?? '';
		this.#email = attributes?.email ?? '';
	}

	public get firstName(): string {
		return this.#firstName;
	}

	public get lastName(): string {
		return this.#lastName;
	}

	public get email(): string {
		return this.#email;
	}

	// static associate(models) {
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
