import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserEntity, UserSchema } from '../schemas/user.schema';
import { UserReadRepository } from './user.read-repository';
import { UserBaseRepository } from './user.base-repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserEntity.name, schema: UserSchema }]),
  ],
  providers: [UserBaseRepository, UserReadRepository],
  exports: [UserReadRepository],
})
export class UserRepositoriesModule {}
