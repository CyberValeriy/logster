import { IUserEntity } from '../entities';

export interface IUserReadRepository {
  readUser(userId: string): Promise<IUserEntity | null>;
}

export const IUserReadRepository = Symbol('IUserReadRepository');
