import { Router } from "express";
import {CreateUser} from '../controllers/usercontroller.js';
const router=Router();

router.use('/create',CreateUser);


export default router;
