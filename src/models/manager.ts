import { DataTypes, Model, Sequelize } from 'sequelize';

interface ManagerAttributes {
	firstName: string;
	lastName: string;
	email: string;
}

export class Manager extends Model<ManagerAttributes> {
	#firstName!: string;
	#lastName!: string;
	#email!: string;

	constructor(attributes?: ManagerAttributes, options?: any) {
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

export function initManager(sequelize: Sequelize) {
	Manager.init(
		{
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			email: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Manager',
		}
	);
}
