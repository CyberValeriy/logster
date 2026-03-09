import { IUserEntity } from '../entities';

export interface IUserWriteService {
  createUser(user: IUserEntity): Promise<IUserEntity>;
}

export const IUserWriteService = Symbol('IUserWriteService');
