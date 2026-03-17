import { Inject, Injectable } from '@nestjs/common';
import { IUserEntity, IUserEntityWithPassword, IUserReadRepository } from '../interfaces';
import { IUserReadService } from '../interfaces/services/user-read.service.interface';

@Injectable()
export class UserReadService implements IUserReadService {
  public constructor(@Inject(IUserReadRepository) private readonly userReadRepository: IUserReadRepository) {}

  public async readUser(userId: string): Promise<IUserEntity | null> {
    return this.userReadRepository.readUser(userId);
  }

  public async readUserByEmail(email: string): Promise<IUserEntityWithPassword | null> {
    return this.userReadRepository.readUserByEmail(email);
  }
}
