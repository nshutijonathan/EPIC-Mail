import express from 'express';
//import user from '../modals/user';
import userController from '../controllers/users';
import UserController from '../controllers/sign_up';

const router=express.Router();
//users api Endpoints
router.get('/api/v1/users', userController.getALLusers);
router.get('/api/v1/users/:id', userController.getUser);
router.post('/api/v1/users', userController.createUser);
router.put('/api/v1/users/:id',userController.updateUser);
router.delete('/api/v1/users/:id', userController.deleteUser);
//sign_up endpoints
router.get('/api/v1/auth/sign_up',UserController.getusers);

export default router;