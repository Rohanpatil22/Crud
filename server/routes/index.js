import { Router } from "express";
import {CreateUser,allUserData,deleteUser} from '../controllers/usercontroller.js';
const router=Router();

router.use('/create',CreateUser);
router.use('/getdata',allUserData);
router.use('/delete',deleteUser);


export default router;
