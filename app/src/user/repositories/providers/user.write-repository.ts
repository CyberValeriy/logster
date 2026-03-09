import { InjectModel } from '@nestjs/mongoose';
import { UserEntity } from '../../schemas/user.schema';
import { Mode } from 'fs';
import { IUserEntity, IUserWriteRepository } from '../../interfaces';
import { UserBaseRepository } from './user.base-repository';
import { Model } from 'mongoose';

export class UserWriteRepository
  extends UserBaseRepository
  implements IUserWriteRepository
{
  public constructor(
    @InjectModel(UserEntity.name) private userModel: Model<UserEntity>,
  ) {
    super();
  }

  public async createUser(user: IUserEntity): Promise<IUserEntity> {
    const newUser = await this.userModel.create(user);
    return this.serialize(newUser);
  }
}
