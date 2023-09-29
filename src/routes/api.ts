import Router, {NextFunction, Request, Response} from 'express';
import {Task} from "../models/task";
import {User} from "../models/user";

const router = Router();

router.get('/', function (req: Request, res: Response, next: NextFunction) {
	res.send('hello world');
});

router.get('/users/:id/tasks', async (req: Request, res: Response) => {
	try {
		const userId = req.params.id;
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
});

export default router;
