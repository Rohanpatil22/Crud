import { Router } from "express";
import {CreateUser,allUserData,deleteUser,updateUser} from '../controllers/usercontroller.js';
const router=Router();

router.use('/create',CreateUser);
router.use('/getdata',allUserData);
router.use('/delete',deleteUser);
router.use('/updatedata',updateUser);


export default router;
