import { Inject, Injectable } from '@nestjs/common';
import { ICreateUserInput, IUserEntity, IUserWriteRepository } from '../interfaces';
import { IUserWriteService } from '../interfaces/services';

@Injectable()
export class UserWriteService implements IUserWriteService {
  public constructor(@Inject(IUserWriteRepository) private readonly userWriteRepository: IUserWriteRepository) {}

  public async createUser(input: ICreateUserInput): Promise<IUserEntity> {
    return this.userWriteRepository.createUser(input);
  }
}
