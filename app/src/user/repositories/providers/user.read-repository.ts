import { InjectModel } from '@nestjs/mongoose';
import { UserBaseRepository } from './user.base-repository';
import { UserEntity } from '../../schemas/user.schema';
import { Model } from 'mongoose';
import { IUserReadRepository } from '../../interfaces/repositories';
import { IUserEntity, IUserEntityWithPassword } from '../../interfaces/entities';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserReadRepository extends UserBaseRepository implements IUserReadRepository {
  public constructor(@InjectModel(UserEntity.name) private userModel: Model<UserEntity>) {
    super();
  }

  public async readUser(userId: string): Promise<IUserEntity | null> {
    const user = await this.userModel.findById(userId);
    return user ? this.serialize(user) : null;
  }

  public async readUserByEmail(email: string): Promise<IUserEntityWithPassword | null> {
    const user = await this.userModel.findOne({ email });
    return user ? this.serializeWithPassword(user) : null;
  }
}
