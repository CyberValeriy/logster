import { Injectable } from '@nestjs/common';
import { IUserEntity, IUserReadRepository } from '../interfaces';
import { IUserReadService } from '../interfaces/services/user-read.service.interface';

@Injectable()
export class UserReadService implements IUserReadService {
  public constructor(
    private readonly userReadRepository: IUserReadRepository,
  ) {}

  public async readUser(userId: string): Promise<IUserEntity | null> {
    return this.userReadRepository.readUser(userId);
  }
}
