import { InjectModel } from '@nestjs/mongoose';
import { UserEntity } from '../../schemas/user.schema';
import { ICreateUserInput, IUserEntity } from '../../interfaces/entities';
import { IUserWriteRepository } from '../../interfaces/repositories';
import { UserBaseRepository } from './user.base-repository';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserWriteRepository extends UserBaseRepository implements IUserWriteRepository {
  public constructor(@InjectModel(UserEntity.name) private userModel: Model<UserEntity>) {
    super();
  }

  public async createUser(input: ICreateUserInput): Promise<IUserEntity> {
    const newUser = await this.userModel.create(input);
    return this.serialize(newUser);
  }
}
