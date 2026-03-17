import { ICreateUserInput, IUserEntity } from '../entities';

export interface IUserWriteService {
  createUser(input: ICreateUserInput): Promise<IUserEntity>;
}

export const IUserWriteService = Symbol('IUserWriteService');
