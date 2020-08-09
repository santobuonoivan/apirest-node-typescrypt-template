
import { Router } from 'express';
const UserController = require('./controller');
const router = Router();

router.get( '/users', UserController.getAllUser);
router.get( '/users/:id', UserController.getUser);

export default  router;
