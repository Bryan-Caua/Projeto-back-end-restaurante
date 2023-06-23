import { Router } from "express";
import { createUserController } from "../controllers/createUserControllers";
import { listUserController } from "../controllers/listUsersController";
import validationToken from "../middlewares/validationUserToken";
import ensureDataValidMiddleware from "../middlewares/ensuredata";
import { userSerializer, userSerializerUpdate } from "../serializer/user.serializer";
import validationIsAdmin from "../middlewares/validationIsAdmin";
import updateUserController from "../controllers/updateUser";
import deleteUserController from "../controllers/deleteUser";

const userRoutes = Router()
userRoutes.post('', ensureDataValidMiddleware(userSerializer), createUserController)
userRoutes.get('',validationToken, validationIsAdmin ,listUserController)
userRoutes.patch('/:id',ensureDataValidMiddleware(userSerializerUpdate), validationToken, updateUserController )
userRoutes.delete('/:id', validationToken, validationIsAdmin, deleteUserController)

export default userRoutes