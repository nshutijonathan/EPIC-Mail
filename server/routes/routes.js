import express from 'express';
//import user from '../modals/user';
import userController from '../controllers/users';
import usercontacts from'../controllers/contacts';
import usermessages from '../controllers/messages';
import usersents from '../controllers/sents';

const router=express.Router();
//users api Endpoints
router.get('/api/v1/users', userController.getALLusers);
router.get('/api/v1/users/:id', userController.getUser);
router.post('/api/v1/users', userController.createUser);
//router.put('/api/v1/users/:id',userController.updateUser);
router.delete('/api/v1/users/:id', userController.deleteUser);


//contacts api Endpoints
router.get('/api/v1/contacts',usercontacts.getALLcontacts);
router.get('/api/v1/contacts/:id',usercontacts.get_one_contact);
router.post('/api/v1/contacts',usercontacts.createcontact);
router.delete('/api/v1/contacts/:id',usercontacts.deletecontact);


//messsages api endpoints
router.get('/api/v1/messages',usermessages.getALLmessages);
router.get('/api/v1/messages/:id',usermessages.get_one_message);
router.post('/api/v1/messages',usermessages.createmessage);
router.delete('/api/v1/messages/:id',usermessages.deletemessage);

//sent messages api endpoints
router.get('/api/v1/sents',usersents.getsents);
router.get('/api/v1/sents/:id',usersents.get_one_sent);
router.post('/api/v1/sents',usersents.createsent);
router.delete('/api/v1/sents/:id',usersents.deletesent);
//inbox messages api endpoints
//router.get('/api/v1/inbox',InboxController.getsents);
//router.get('/api/v1/inbox/:id',usersents.get_one_sent);
//router.post('/api/v1/inbox',usersents.createsent);
//router.delete('/api/v1/inbox/:id',usersents.deletesent);

export default router;