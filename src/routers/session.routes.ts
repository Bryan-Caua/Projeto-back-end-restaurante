import { Router } from "express";
import { sessionController } from "../controllers/sessionController";



const sessionRoutes = Router()
sessionRoutes.post('', sessionController)


export default sessionRoutes