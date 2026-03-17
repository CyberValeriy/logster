import { IUserEntity, IUserEntityWithPassword } from '../entities';

export interface IUserReadService {
  readUser(userId: string): Promise<IUserEntity | null>;
  readUserByEmail(email: string): Promise<IUserEntityWithPassword | null>;
}

export const IUserReadService = Symbol('IUserReadService');
