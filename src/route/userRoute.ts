import {getUsers} from "../controller/userController";
import { Router } from "express";

const router = Router()

router.post('/',getUsers)

export default router   