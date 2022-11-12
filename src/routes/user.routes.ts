import { Router } from 'express';
import CreateUserController from '../modules/user/useCases/createUser/CreateUser.controller';
import ListUserController from '../modules/user/useCases/listUser/ListUser.controller';
import DeleteUserController from '../modules/user/useCases/deleteUsers/DeleteUser.controller';
import UpdateUserController from '../modules/user/useCases/updateUser/UpdateUser.controller';

const userRoutes = Router();
const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();

userRoutes.post('/', createUserController.handle);
userRoutes.get('/', listUserController.handle);
userRoutes.delete('/:id', deleteUserController.handle);
userRoutes.put('/userName/:id', updateUserController.handle);

export default userRoutes;