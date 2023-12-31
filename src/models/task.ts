import { DataTypes, Model, Sequelize } from 'sequelize';

interface TaskAttributes {
	summary: string;
	performedAt: Date;
}

export class Task extends Model<TaskAttributes> {
	#summary!: string;
	#performedAt!: Date;

	constructor(attributes?: TaskAttributes, options?: any) {
		super(attributes, options);
		this.#summary = attributes?.summary ?? '';
		this.#performedAt = attributes?.performedAt ?? new Date();
	}

	public get summary(): string {
		return this.#summary;
	}

	public get performedAt(): Date {
		return this.#performedAt;
	}

	static associate(models: any) {
		Task.belongsTo(models.User, {
			foreignKey: 'technicianId',
			as: 'technician',
		});
	}
}

export function initTask(sequelize: Sequelize) {
	Task.init(
		{
			summary: DataTypes.STRING(2500),
			performedAt: DataTypes.DATE,
		},
		{
			sequelize,
			modelName: 'Task',
			scopes: {
				technician: (technicianId: number) => ({
					where: {
						technicianId,
					},
				}),
				manager: () => ({})
			}
		}
	);
}