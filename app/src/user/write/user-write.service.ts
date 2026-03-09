import { Injectable } from '@nestjs/common';
import { IUserEntity, IUserWriteRepository } from '../interfaces';
import { IUserWriteService } from '../interfaces/services';

@Injectable()
export class UserWriteService implements IUserWriteService {
  public constructor(private readonly userWriteRepository: IUserWriteRepository) {}

  public async createUser(user: IUserEntity): Promise<IUserEntity> {
    return this.userWriteRepository.createUser(user);
  }
}
