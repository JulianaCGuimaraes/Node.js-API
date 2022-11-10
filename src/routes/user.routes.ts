import { Router } from 'express';
import CreateUserController from '../modules/users/useCases/createUser/CreateUser.controller';
import ListUserController from '../modules/users/useCases/listUser/ListUser.controller';
import DeleteUserController from '../modules/users/useCases/deleteUsers/DeleteUser.controller';
import UpdateUserController from '../modules/users/useCases/updateUser/UpdateUser.controller';

const userRoutes = Router();
const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();

userRoutes.post('/', createUserController.handle);
userRoutes.get('/', listUserController.handle);
userRoutes.delete('/:id', deleteUserController.handle);
userRoutes.put('/name/:id', updateUserController.handle);

export default userRoutes;