import { DataTypes, Model, Sequelize } from 'sequelize';

interface UserAttributes {
	role: string;
	firstName: string;
	lastName: string;
	email: string;
}

export class User extends Model<UserAttributes> {
	#role!: string;
	#firstName!: string;
	#lastName!: string;
	#email!: string;

	constructor(attributes?: UserAttributes, options?: any) {
		super(attributes, options);
		this.#role = attributes?.role ?? '';
		this.#firstName = attributes?.firstName ?? '';
		this.#lastName = attributes?.lastName ?? '';
		this.#email = attributes?.email ?? '';
	}

	public get role(): string {
		return this.#role;
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

	static associate(models: any) {
		User.hasMany(models.Task, {
			foreignKey: 'technicianId',
			as: 'tasks',
		});
	}
}

export function initUser(sequelize: Sequelize) {
	User.init(
		{
			role: DataTypes.STRING,
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			email: DataTypes.STRING
		},
		{
			sequelize,
			modelName: 'User',
		}
	);
}
