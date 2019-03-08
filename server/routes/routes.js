import express from 'express';
//import user from '../modals/user';
import userController from '../controllers/users';

const router=express.Router();
router.get('/api/v1/users', userController.getALLusers);
router.get('/api/v1/users/:id', userController.getUser);
router.post('/api/v1/users', userController.createUser);
router.put('/api/v1/users/:id',userController.updateUser);
router.delete('/api/v1/users/:id', userController.deleteUser);

export default router;