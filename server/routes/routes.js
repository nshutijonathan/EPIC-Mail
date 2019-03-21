import express from 'express';
//import user from '../modals/user';
//import user from '../modals/user';
import UsersController  from '../controllers/users';
import ContactsController from'../controllers/contacts';
import MessagesController from '../controllers/messages';
import SentsController from '../controllers/sents';
import InboxController from '../controllers/inbox';
import User from '../controllers/sign_up';
const router=express.Router();
//users api Endpoints
router.get('/api/v1/users', UsersController.getALLusers);//userController
router.get('/api/v1/users/:id', UsersController.getUser);
router.post('/api/v1/users', UsersController.createUser);
//router.put('/api/v1/users/:id',UsersController.updateUser);
router.delete('/api/v1/users/:id', UsersController.deleteUser);

//Register a user endpoints
router.post('/api/v2/auth/signup',User.sign_up);
router.post('/api/v2/auth/signin',User.sign_in);

//contacts api Endpoints
//router.get('/api/v1/contacts',ContactsController.getALLcontacts);//usercontacts
//router.get('/api/v1/contacts/:id',ContactsController.get_one_contact);
//router.post('/api/v1/contacts',ContactsController.createcontact);
//router.delete('/api/v1/contacts/:id',ContactsController.deletecontact);


//messsages api endpoints
//router.get('/api/v1/messages',MessagesController.getALLmessages);//usermessages
//router.get('/api/v1/messages/:id',MessagesController.get_one_message);
//router.post('/api/v1/messages',MessagesController.createmessage);
//router.delete('/api/v1/messages/:id',MessagesController.deletemessage);

//sent messages api endpoints
//router.get('/api/v1/sents',SentsController.getsents);//usersents
//router.get('/api/v1/sents/:id',SentsController.get_one_sent);
//router.post('/api/v1/sents',SentsController.createsent);
//router.delete('/api/v1/sents/:id',SentsController.deletesent);

//inbox messages api endpoints
//router.get('/api/v1/inbox',InboxController.getALLinbox);
//router.get('/api/v1/inbox/:id',InboxController.get_one_inbox);
export default router;