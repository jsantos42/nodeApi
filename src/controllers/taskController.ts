import {Request, Response} from 'express';
import {Task} from "../models/task";
import {User} from "../models/user";

export async function getUserTasks(req: Request, res: Response) {
	try {
		const userId = req.params.userId;
		const user = await User.findByPk(userId);

		if (!user) {
			return res.status(404).json({error: 'User not found'});
		}

		let tasks;
		switch (user.role) {
			case 'manager':
				tasks = await Task.findAll();
				res.json(tasks);
				break;
			case 'technician':
				tasks = await Task.findAll({
					where: {technicianId: userId} as any
				});
				res.json(tasks);
				break;
			default:
				return res.status(403).json({error: 'Unauthorized'});
		}
	} catch (error) {
		console.error('Error fetching tasks:', error);
		res.status(500).json({error: 'Internal Server Error'});
	}
}
