import { IUserEntity, IUserEntityWithPassword } from '../entities';

export interface IUserReadRepository {
  readUser(userId: string): Promise<IUserEntity | null>;
  readUserByEmail(email: string): Promise<IUserEntityWithPassword | null>;
}

export const IUserReadRepository = Symbol('IUserReadRepository');
