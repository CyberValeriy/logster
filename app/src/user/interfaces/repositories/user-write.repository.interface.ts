import { ICreateUserInput, IUserEntity } from '../entities';

export interface IUserWriteRepository {
  createUser(input: ICreateUserInput): Promise<IUserEntity>;
}

export const IUserWriteRepository = Symbol('IUserWriteRepository');
