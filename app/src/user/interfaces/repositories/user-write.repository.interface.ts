import { IUserEntity } from '../entities';

export interface IUserWriteRepository {
  createUser(user: IUserEntity): Promise<IUserEntity>;
}

export const IUserWriteRepository = Symbol('IUserWriteRepository');
