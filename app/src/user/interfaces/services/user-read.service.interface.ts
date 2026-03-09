import { IUserEntity } from '../entities';

export interface IUserReadService {
  readUser(userId: string): Promise<IUserEntity | null>;
}

export const IUserReadService = Symbol('IUserReadService');
