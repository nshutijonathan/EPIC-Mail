import express from 'express';

import User from '../controllers/sign_up';
import Messages from '../controllers/messages';
const router=express.Router();


//Register a user endpoints
router.post('/api/v2/auth/signup',User.sign_up);
router.post('/api/v2/auth/signin',User.sign_in);

//messsages api endpoints
router.post('/api/v2/messages',Messages.Createmsg);
export default router;