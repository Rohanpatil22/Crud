import { Router } from "express";
import {CreateUser,allUserData} from '../controllers/usercontroller.js';
const router=Router();

router.use('/create',CreateUser);
router.use('/getdata',allUserData);


export default router;
