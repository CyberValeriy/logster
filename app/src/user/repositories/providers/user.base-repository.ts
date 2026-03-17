import { Injectable } from '@nestjs/common';
import { IUserEntity, IUserEntityWithPassword } from '../../interfaces/entities';
import { UserEntity } from '../../schemas/user.schema';

@Injectable()
export class UserBaseRepository {
  public serialize(entity: UserEntity): IUserEntity {
    return {
      id: entity._id.toString(),
      email: entity.email,
      username: entity.username,
      createdAt: entity.createdAt,
    };
  }

  public serializeWithPassword(entity: UserEntity): IUserEntityWithPassword {
    return {
      ...this.serialize(entity),
      password: entity.password,
    };
  }
}
