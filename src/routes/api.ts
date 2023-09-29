import Router, {NextFunction, Request, Response} from 'express';
import * as taskController from "../controllers/taskController";

const router = Router();

router.get('/', function (req: Request, res: Response, next: NextFunction) {
	res.send('hello world');
});

router.get('/users/:userId/tasks', taskController.getUserTasks);

router.post('/users/:userId/tasks/:taskId/delete', taskController.deleteTask);

export default router;
