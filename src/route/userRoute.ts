import {getUsers,getOne} from "../controller/userController";
import { Router } from "express";

const router = Router();

router.post('/',getUsers);
router.post('/:id',getOne);

export default router   